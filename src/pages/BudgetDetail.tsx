import { useEffect, useState } from 'react'

import {
  ArrowSquareOut,
  Check,
  Funnel,
  FunnelSimple,
  ListBullets,
  PencilSimple,
  Plus,
  Tag
} from 'phosphor-react'
import Button from '../components/Button'
import DashboardHeader from '../components/DashboardHeader'
import PageFooter from '../components/PageFooter'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown } from 'flowbite-react'
import {
  BRL,
  getNameOfBudgetType,
  getStoreNameFromURL,
  sumAllPrices
} from '../utils'
import AddBudgetItemModal from '../components/AddBudgetItemModal'
import FilterModal from '../components/FilterModal'
import Loading from '../components/Loading'
import NoContentPlaceholder from '../components/NoContentPlaceholder'
import Badge from '../components/Badge'
import EditBudgetItemModal from '../components/EditBudgetItemModal'
import {
  Budget,
  BudgetItem,
  BudgetType,
  useGetBudgetQueryLazyQuery
} from '../graphql/generated'
import classNames from 'classnames'
import EditBudgetModal from '../components/EditBudgetModal'
import Card from '../components/Card'
import { DEFAULT_BUDGET } from '../common/defaultBudget'

interface StateProps {
  state: {
    budget: Budget
  }
}

export default function BudgetDetail() {
  const { state } = useLocation() as StateProps

  const [budget, setBudget] = useState<Budget>(DEFAULT_BUDGET)
  const [showAddBudgetItemModal, setShowAddBudgetItemModal] = useState(false)
  const [showEditBudgetItemModal, setShowEditBudgetItemModal] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [showEditBudgetModal, setShowEditBudgetModal] = useState(false)

  const [editBudgetItem, setEditBudgetItem] = useState<BudgetItem>()
  const [orderBy, setOrderBy] = useState('price-asc')

  const navigate = useNavigate()

  const [getBudgetQuery, { loading: queryLoading }] =
    useGetBudgetQueryLazyQuery()

  const handleAddItem = () => {
    setShowAddBudgetItemModal(true)
  }

  const handleFilterBy = () => {
    setShowFilterModal(true)
  }

  const handleOrderBy = (orderBy: 'price-asc' | 'price-desc') => {
    switch (orderBy) {
      case 'price-asc':
        const ascPrice = [...budget.items].sort((a, b) => a.price - b.price)
        setBudget({ ...budget, items: ascPrice })
        setOrderBy('price-asc')
        break
      case 'price-desc':
        const descPrice = [...budget.items].sort((a, b) => b.price - a.price)
        setBudget({ ...budget, items: descPrice })
        setOrderBy('price-desc')
        break
    }
  }

  const handleEditCard = (item: BudgetItem) => {
    setEditBudgetItem(item)
    setShowEditBudgetItemModal(true)
  }

  const handleDeleteBudget = async () => {
    setShowEditBudgetModal(true)
  }

  const loadBudget = async () => {
    try {
      const { data } = await getBudgetQuery({
        variables: {
          id: state.budget.id
        }
      })

      setBudget(data?.budget)
    } catch (error) {
      console.error('Error loading budget', error)
    }
  }

  useEffect(() => {
    if (!state.budget.id) {
      navigate('/budgets')
      return
    }

    loadBudget()
  }, [])

  return (
    <div className="gradient-background flex flex-col min-h-screen">
      <DashboardHeader />

      <div className="flex flex-1 flex-col w-full">
        <div className="flex gap-4 justify-end px-10 py-10">
          <div className="flex flex-col flex-1">
            <h1 className="title">{budget?.name}</h1>
            {!queryLoading && (
              <span className="description gap-1">
                <span>{`${budget.items?.length ?? 0}`}</span>
                <span>{`${budget.items?.length > 1 ? 'itens' : 'item'}`}</span>
                {budget.items.findIndex(
                  budget => budget.budgetType === BudgetType.Wishlist
                ) !== -1 && (
                  <span>
                    {`${BRL(
                      sumAllPrices(budget.items)
                    ).format()} na lista de desejos`}
                  </span>
                )}
              </span>
            )}
          </div>

          <Button
            onClick={handleDeleteBudget}
            icon={<PencilSimple weight="fill" size={18} />}
            variant="outline-primary"
          >
            Orçamento
          </Button>

          <Dropdown
            label={
              <Button
                icon={
                  <FunnelSimple
                    weight="bold"
                    size={18}
                    className={classNames({
                      'rotate-180': orderBy === 'price-asc',
                      'rotate-0': orderBy === 'price-desc'
                    })}
                  />
                }
                variant="outline-primary"
              >
                Ordenar
              </Button>
            }
            arrowIcon={false}
            inline={true}
          >
            <Dropdown.Item onClick={() => handleOrderBy('price-asc')}>
              <div
                className={classNames('flex gap-2 items-center', {
                  'text-primary': orderBy === 'price-asc'
                })}
              >
                {orderBy === 'price-asc' && <Check size={12} weight="bold" />}
                Menor preço
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleOrderBy('price-desc')}>
              <div
                className={classNames('flex gap-2 items-center', {
                  'text-primary': orderBy === 'price-desc'
                })}
              >
                {orderBy === 'price-desc' && <Check size={12} weight="bold" />}
                Maior preço
              </div>
            </Dropdown.Item>
          </Dropdown>

          <Button
            onClick={handleFilterBy}
            icon={<Funnel weight="fill" size={18} />}
            variant="outline-primary"
          >
            Filtrar
          </Button>

          <Button
            onClick={handleAddItem}
            icon={<Plus weight="bold" size={18} />}
          >
            Item
          </Button>
        </div>

        <div className="flex flex-1 flex-wrap gap-6 justify-center items-center px-16 pb-32">
          {queryLoading && <Loading />}

          {!queryLoading && !budget.items?.length && (
            <NoContentPlaceholder
              title="Você ainda não possui itens nesse orçamento"
              description="Clique no botão acima para adicionar um item"
            />
          )}

          {!queryLoading &&
            budget.items?.map(budget => (
              <Card imgSrc={budget.imageURL} key={budget.id}>
                <span onClick={() => handleEditCard(budget)}>
                  <div className="flex flex-1 gap-2 items-center py-1">
                    <Badge>
                      <Tag size={11} />
                      {budget.category}
                    </Badge>
                    <Badge
                      type={
                        budget.budgetType === 'purchased'
                          ? 'success'
                          : 'wishlist'
                      }
                    >
                      <ListBullets size={11} />
                      {getNameOfBudgetType(budget.budgetType)}
                    </Badge>
                  </div>
                  <p className="budget-card-title">{budget.name}</p>
                </span>
                <div className="flex">
                  <div className="flex flex-1">
                    {budget.link && (
                      <div className="budget-card-link">
                        <a
                          href={budget.link}
                          target="_blank"
                          className="font-normal text-sm"
                        >
                          {getStoreNameFromURL(budget.link)}
                        </a>
                        <ArrowSquareOut size={15} />
                      </div>
                    )}
                  </div>
                  <p className="font-normal text-zinc-900">
                    {BRL(budget.price).format()}
                  </p>
                </div>
              </Card>
            ))}
        </div>
      </div>

      <AddBudgetItemModal
        budget={budget}
        show={showAddBudgetItemModal}
        onClose={() => setShowAddBudgetItemModal(false)}
      />
      <EditBudgetItemModal
        budgetName={budget?.name}
        budgetItem={editBudgetItem}
        show={showEditBudgetItemModal}
        onClose={() => setShowEditBudgetItemModal(false)}
      />
      <FilterModal
        budget={budget}
        show={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        setBudget={setBudget}
      />
      <EditBudgetModal
        budget={budget}
        show={showEditBudgetModal}
        onClose={() => setShowEditBudgetModal(false)}
      />
      <PageFooter />
    </div>
  )
}
