import { Card } from 'flowbite-react'
import { CircleNotch, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DEFAULT_ICON_SIZE } from '../common/iconSizes'
import AddBudgetModal from '../components/AddBudgetModal'
import Button from '../components/Button'
import DashboardHeader from '../components/DashboardHeader'
import Loading from '../components/Loading'
import NoContentPlaceholder from '../components/NoContentPlaceholder'
import PageFooter from '../components/PageFooter'
import { Budget } from '../interfaces/Budget'

import budgetsMock from '../mocks/budgets.json'

export default function Budgets() {
  const [budgets, setBudgets] = useState<Budget[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)

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

  const loadBudgets = async () => {
    setIsLoading(true)

    // const budgets = await fetch("http://localhost:3000/budgets").then(res => res.json());
    setTimeout(() => {
      setBudgets(budgetsMock)
      setIsLoading(false)
    }, 1000)

    // setBudgets(budgets);
    // setIsLoading(false);
  }

  useEffect(() => {
    loadBudgets()
  }, [])

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
          {isLoading && <Loading />}

          {!isLoading && !budgets.length && (
            <NoContentPlaceholder
              title="Você ainda não possui nenhum orçamento"
              description="Clique no botão acima para criar um orçamento"
            />
          )}

          {!isLoading &&
            budgets.map(budget => (
              <div className="w-80 default-card-hover-effect">
                <span onClick={() => handleBudgetClick(budget)}>
                  <Card imgSrc={budget.image}>
                    <h1 className="card-title">{budget.name}</h1>
                    <p className="card-description">{budget.description}</p>
                  </Card>
                </span>
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
