import { Card } from 'flowbite-react'
import { Plus } from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DEFAULT_ICON_SIZE } from '../common/iconSizes'
import AddBudgetModal from '../components/AddBudgetModal'
import Button from '../components/Button'
import DashboardHeader from '../components/DashboardHeader'
import Loading from '../components/Loading'
import NoContentPlaceholder from '../components/NoContentPlaceholder'
import PageFooter from '../components/PageFooter'
import { Budget, useGetBudgetsQuery } from '../graphql/generated'

export default function Budgets() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)

  const { data, loading } = useGetBudgetsQuery()

  const navigate = useNavigate()

  const handleAddBudget = () => {
    setShowAddBudgetModal(true)
  }

  const handleBudgetClick = (budget: Budget) => {
    navigate('/budget/detail', {
      state: {
        budget
      }
    })
  }

  return (
    <div className="default-background">
      <DashboardHeader />

      <div className="flex flex-1 flex-col w-full">
        <div className="flex justify-end px-10 py-10">
          <Button
            onClick={handleAddBudget}
            icon={<Plus weight="bold" size={DEFAULT_ICON_SIZE} />}
          >
            Orçamento
          </Button>
        </div>

        <div className="flex flex-1 flex-wrap gap-8 justify-center items-center px-16 pb-32">
          {loading && <Loading />}

          {!loading && !data?.budgets.length && (
            <NoContentPlaceholder
              title="Você ainda não possui nenhum orçamento"
              description="Clique no botão acima para criar um orçamento"
            />
          )}

          {!loading &&
            data?.budgets.map(budget => (
              <div key={budget.id} className="w-80 cursor-pointer">
                <Card
                  onClick={() => handleBudgetClick(budget)}
                  imgSrc={budget.imageURL}
                >
                  <h1 className="card-title">{budget.name}</h1>
                  <p className="card-description">{budget.description}</p>
                </Card>
              </div>
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
