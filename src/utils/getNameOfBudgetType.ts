import { BudgetType } from '../graphql/generated'

export const getNameOfBudgetType = (budgetType: BudgetType): string => {
  switch (budgetType) {
    case BudgetType.Purchased:
      return 'Comprado'
    case BudgetType.Wishlist:
      return 'Lista de desejos'
  }
}
