import { Budget, BudgetItem, BudgetType } from '../graphql/generated'
import { formatToCurrency } from './formatToCurrency'

export const sumAllPrices = (budget: Budget[]): number =>
  budget.reduce((acc: number, budget: BudgetItem) => {
    if (budget.budgetType !== BudgetType.Purchased) return acc
    return acc
  }, 0)
