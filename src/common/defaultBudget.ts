import { Budget, BudgetType, Category } from '../graphql/generated'

export const DEFAULT_BUDGET: Budget = {
  id: '',
  name: '',
  items: [
    {
      id: '',
      name: '',
      budgetType: BudgetType.Purchased,
      price: 0,
      category: Category.Outros,
      imageURL: '',
      link: ''
    }
  ]
}
