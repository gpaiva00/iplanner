import Card from '../components/Card'
import DashboardHeader from '../components/DashboardHeader'
import PageFooter from '../components/PageFooter'

export default function Dashboard() {
  return (
    <div className="default-background">
      <DashboardHeader />

      <div className="flex flex-1 flex-col md:flex-row gap-6 justify-center items-center px-0 pb-0 md:px-16 md:pb-16">
        <a href="/budgets" className="w-80">
          <Card imgSrc="images/finances.jpg">
            <h1 className="card-title">Orçamentos</h1>
            <p className="card-description">
              Todas as suas finanças num só lugar
            </p>
          </Card>
        </a>

        <a href="/guestsList" className="w-80">
          <Card imgSrc="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80">
            <h1 className="card-title">Convidados</h1>
            <p className="card-description">Gerencie seus convidados</p>
          </Card>
        </a>
      </div>
      <PageFooter />
    </div>
  )
}
