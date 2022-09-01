import { Route, Routes } from 'react-router-dom'
import BudgetDetail from './pages/BudgetDetail'
import Budgets from './pages/Budgets'
import Dashboard from './pages/Dashboard'
import GuestsList from './pages/GuestsList'
import GuestsListDetail from './pages/GuestsListDetail'

import Home from './pages/Home'
import Login from './pages/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/budgets" element={<Budgets />} />
      <Route path="/budget/detail" element={<BudgetDetail />} />
      <Route path="/guestsList" element={<GuestsList />} />
      <Route path="/guestsListDetail" element={<GuestsListDetail />} />
      {/* <Route path='*' element={<NoFound />} /> */}
    </Routes>
  )
}
