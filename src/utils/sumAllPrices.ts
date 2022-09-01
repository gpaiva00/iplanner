import { Budget, BudgetItem, BudgetType } from '../graphql/generated'
import currency from 'currency.js'

export const sumAllPrices = (budget: Budget[]): number =>
  budget.reduce((acc: number, budget: BudgetItem) => {
    if (budget.budgetType === BudgetType.Purchased) return acc
    return currency(acc).add(budget.price)
  }, 0)
