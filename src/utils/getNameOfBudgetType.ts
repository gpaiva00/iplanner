
export const getNameOfBudgetType = (budgetType: "purchased" | "wishlist"): string => {
  switch (budgetType) {
    case "purchased":
      return 'Comprado';
    case "wishlist":
      return 'Lista de desejos';
  }
}