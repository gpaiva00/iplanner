import { useEffect, useState } from 'react'

import { ArrowSquareOut, Funnel, FunnelSimple, Plus, Tag } from 'phosphor-react'
import Button from '../components/Button'
import DashboardHeader from '../components/DashboardHeader'
import PageFooter from '../components/PageFooter'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, Dropdown } from 'flowbite-react'
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
  useGetBudgetItemsQuery
} from '../graphql/generated'

interface StateProps {
  state: {
    budget: Budget
  }
}

export default function BudgetDetail() {
  const { state } = useLocation() as StateProps
  const [isLoading, setIsLoading] = useState(true)

  const [showAddBudgetItemModal, setShowAddBudgetItemModal] = useState(false)
  const [showEditBudgetItemModal, setShowEditBudgetItemModal] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [editBudgetItem, setEditBudgetItem] = useState<BudgetItem>()

  const navigate = useNavigate()

  const budget = state?.budget || {
    id: '',
    name: '',
    type: ''
  }

  const { data, loading: queryLoading } = useGetBudgetItemsQuery({
    variables: {
      id: budget.id
    }
  })

  const handleAddItem = () => {
    setShowAddBudgetItemModal(true)
  }

  const handleFilterBy = () => {
    setShowFilterModal(true)
  }

  const handleOrderBy = (orderBy: 'price-asc' | 'price-desc') => {
    switch (orderBy) {
      case 'price-asc':
        budget.items.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        budget.items.sort((a, b) => b.price - a.price)
        break
    }
  }

  const handleEditCard = (item: BudgetItem) => {
    setEditBudgetItem(item)
    setShowEditBudgetItemModal(true)
  }

  useEffect(() => {
    if (!budget.name) {
      navigate('/budgets')
      return
    }
    setIsLoading(false)
  }, [])

  return (
    <div className="gradient-background flex flex-col min-h-screen">
      <DashboardHeader />

      <div className="flex flex-1 flex-col w-full">
        <div className="flex gap-4 justify-end px-10 pt-10 pb-5">
          <div className="flex flex-col flex-1">
            <h1 className="title">{budget?.name}</h1>
            <span className="description">
              {data?.budgetItems.length} itens &#x2022;
              {!queryLoading &&
                ` ${BRL(sumAllPrices(data?.budgetItems)).format()} totais`}
            </span>
          </div>

          <Dropdown
            label={
              <Button
                icon={<FunnelSimple weight="bold" size={18} />}
                variant="outline-primary"
              >
                Ordenar
              </Button>
            }
            arrowIcon={false}
            inline={true}
          >
            <Dropdown.Item onClick={() => handleOrderBy('price-asc')}>
              Menor preço
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleOrderBy('price-desc')}>
              Menor preço
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

        <div className="flex flex-1 flex-wrap gap-8 justify-center items-center px-16 pb-32">
          {(isLoading || queryLoading) && <Loading />}

          {!(isLoading || queryLoading) && !data?.budgetItems.length && (
            <NoContentPlaceholder
              title="Você ainda não possui itens nesse orçamento"
              description="Clique no botão acima para adicionar um item"
            />
          )}

          {!(isLoading || queryLoading) &&
            data?.budgetItems.map(budget => {
              const imageSrc =
                budget.imageURL || '/src/assets/images/placeholder-image.png'

              return (
                <div className="w-72 cursor-pointer">
                  <Card imgSrc={imageSrc}>
                    <span onClick={() => handleEditCard(budget)}>
                      <div className="flex flex-1 gap-2 items-center py-1">
                        <Badge>
                          <Tag size={10} />
                          {budget.category}
                        </Badge>
                        <Badge
                          type={
                            budget.budgetType === 'purchased'
                              ? 'success'
                              : 'wishlist'
                          }
                        >
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
                </div>
              )
            })}
        </div>
      </div>

      <AddBudgetItemModal
        budget={budget}
        show={showAddBudgetItemModal}
        onClose={() => setShowAddBudgetItemModal(false)}
      />
      <EditBudgetItemModal
        budgetName={budget.name}
        budgetItem={editBudgetItem}
        show={showEditBudgetItemModal}
        onClose={() => setShowEditBudgetItemModal(false)}
      />
      {/* 
      <FilterModal
        budget={budget}
        show={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      /> */}
      <PageFooter />
    </div>
  )
}
