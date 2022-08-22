import { BudgetType } from '../graphql/generated'

export const getNameOfBudgetType = (budgetType: BudgetType): string => {
  switch (budgetType) {
    case BudgetType.Purchased:
      return 'comprado'
    case BudgetType.Wishlist:
      return 'lista de desejos'
    case BudgetType.Saved:
      return 'salvo'
    default:
      return budgetType
  }
}
