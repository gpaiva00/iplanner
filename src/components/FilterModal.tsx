import { useState } from 'react'
import budgetCategories from '../common/budgetCategories'
import budgetTypes from '../common/budgetTypes'
import {
  Budget,
  BudgetType,
  Category,
  useFilterBudgetItemsQueryLazyQuery
} from '../graphql/generated'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Select from './Select'

interface FilterModal {
  show: boolean
  onClose: () => void
  budget: Budget
  setBudget: React.Dispatch<React.SetStateAction<Budget[]>>
}

export default function FilterModal(props: FilterModal) {
  const { show, onClose, budget, setBudget } = props

  const [name, setName] = useState('')
  const [type, setType] = useState(BudgetType.Wishlist)
  const [category, setCategory] = useState(Category.Cama)

  const [filterQuery, { loading: queryLoading }] =
    useFilterBudgetItemsQueryLazyQuery()

  const handleClose = () => {
    setName('')
    setType('')
    setCategory('')
    onClose()
  }

  const handleFilterBy = async () => {
    try {
      const { data } = await filterQuery({
        variables: {
          budgetID: budget.id,
          budgetType: type,
          category,
          name_contains: name
        }
      })

      setBudget({ ...budget, items: data?.budgetItems ?? [] })

      handleClose()
    } catch (error) {
      console.error('Error filter by', error)
    }
  }

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <span className="modal-subtitle">{budget.name}</span>
          <h1 className="modal-title">Filtrar por</h1>
        </div>
      }
      show={show}
      onClose={handleClose}
      body={
        <div className="flex flex-col gap-4">
          <CustomInput
            label="Nome do item"
            placeholder="Ex: Jogo de lençol"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Select
            label="Categoria"
            value={category}
            onChange={setCategory}
            options={budgetCategories}
          />

          <Select
            label="Tipo"
            value={type}
            options={budgetTypes}
            onChange={setType}
          />
        </div>
      }
      footer={
        <div className="flex flex-1 items-center justify-center">
          <Button
            onClick={handleFilterBy}
            variant="primary"
            size="full"
            type="submit"
            isLoading={queryLoading}
          >
            Filtrar
          </Button>
        </div>
      }
    />
  )
}
