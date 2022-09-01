import { Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DEFAULT_ICON_SIZE } from '../common/iconSizes'
import AddBudgetModal from '../components/AddBudgetModal'
import Button from '../components/Button'
import Card from '../components/Card'
import DashboardHeader from '../components/DashboardHeader'
import Loading from '../components/Loading'
import NoContentPlaceholder from '../components/NoContentPlaceholder'
import PageFooter from '../components/PageFooter'
import { Budget, useGetBudgetsLazyQuery } from '../graphql/generated'

export default function Budgets() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [budgets, setBudgets] = useState<Budget[]>([])

  const [getBudgetsQuery, { loading: queryLoading }] = useGetBudgetsLazyQuery()

  const navigate = useNavigate()

  const handleAddBudget = () => setShowAddBudgetModal(true)

  const handleBudgetClick = (budget: Budget) => {
    navigate('/budget/detail', {
      state: {
        budget
      }
    })
  }

  const getBudgets = async () => {
    try {
      const { data } = await getBudgetsQuery()
      setBudgets(data.budgets)
    } catch (error) {
      console.log('Error retrieving budges', error)
    }
  }

  useEffect(() => {
    getBudgets()
  }, [])

  return (
    <div className="default-background">
      <DashboardHeader />

      <div className="flex flex-1 flex-col w-full">
        <div className="flex gap-4 justify-end px-10 py-10">
          <div className="flex flex-col flex-1">
            <h1 className="title">Orçamentos</h1>
            {!queryLoading && (
              <span className="description gap-1">
                <span>{`${budgets?.length ?? 0}`}</span>
                <span>{`${budgets?.length > 1 ? 'itens' : 'item'}`}</span>
              </span>
            )}
          </div>

          <Button
            onClick={handleAddBudget}
            icon={<Plus weight="bold" size={DEFAULT_ICON_SIZE} />}
          >
            Orçamento
          </Button>
        </div>

        <div className="flex flex-1 flex-wrap gap-8 justify-center items-center px-16 pb-32">
          {queryLoading && <Loading />}

          {!queryLoading && !budgets?.length && (
            <NoContentPlaceholder
              title="Você ainda não possui nenhum orçamento"
              description="Clique no botão acima para criar um orçamento"
            />
          )}

          {!queryLoading &&
            budgets?.map(budget => (
              <Card imgSrc={budget.imageURL} key={budget.id}>
                <h1
                  onClick={() => handleBudgetClick(budget)}
                  className="card-title cursor-pointer"
                >
                  {budget.name}
                </h1>
                <p className="card-description">{budget.description}</p>
              </Card>
            ))}
        </div>
      </div>
      <AddBudgetModal
        show={showAddBudgetModal}
        onClose={() => setShowAddBudgetModal(false)}
      />
      <PageFooter />
    </div>
  )
}
