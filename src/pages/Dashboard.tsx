import { Card } from 'flowbite-react'
import DashboardHeader from '../components/DashboardHeader'
import PageFooter from '../components/PageFooter'

export default function Dashboard() {
  return (
    <div className="default-background">
      <DashboardHeader />

      <div className="flex flex-1 gap-10 justify-center items-center px-16 pb-16">
        <a href="/budgets" className="w-80">
          <Card imgSrc="/src/assets/images/finances.jpg">
            <h1 className="card-title">Orçamentos</h1>
            <p className="card-description">
              Todas as suas finanças num só lugar
            </p>
          </Card>
        </a>

        <a href="#" className="w-80">
          <Card imgSrc="/src/assets/images/guests.jpg">
            <h1 className="card-title">Convidados</h1>
            <p className="card-description">Gerencie seus convidados</p>
          </Card>
        </a>
      </div>
      <PageFooter />
    </div>
  )
}
