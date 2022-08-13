import { useEffect, useState } from 'react'
import currency from 'currency.js'
import { moneyMask } from '../utils/formatToCurrency'
import {
  useUpdateBudgetItemMutationMutation,
  BudgetType,
  Category,
  usePublishBudgetItemMutation,
  BudgetItem,
  useDeleteBudgetItemMutationMutation
} from '../graphql/generated'
import { validateURL } from '../utils'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Loading from './Loading'
import Select from './Select'
import budgetCategories from '../common/budgetCategories'
import budgetTypes from '../common/budgetTypes'

interface EditBudgetItemModalProps {
  show: boolean
  onClose: () => void
  budgetName: string
  budgetItem: BudgetItem
}

export default function EditBudgetItemModal(props: EditBudgetItemModalProps) {
  const { show, onClose, budgetItem, budgetName } = props

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState<BudgetType>(BudgetType.Wishlist)
  const [category, setCategory] = useState<Category>(Category.Cama)
  const [link, setLink] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [updateBudgetItem, { loading: mutationLoading }] =
    useUpdateBudgetItemMutationMutation()

  const [publishBudgetItem, { loading: publishLoading }] =
    usePublishBudgetItemMutation()

  const [deleteBudgetItem, { loading: deleteLoading }] =
    useDeleteBudgetItemMutationMutation()

  const handleClose = () => {
    setName('')
    setPrice('')
    setType('')
    setCategory('')
    setLink('')
    setImageURL('')
    setImagePreview('')
    onClose()
  }

  let imageTimeout: any = null

  const handleOnImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageURL = event.target.value

    setImageURL(imageURL)
    setImagePreview('')

    const isValid = validateURL(imageURL)
    setIsLoading(isValid)

    clearTimeout(imageTimeout)

    imageTimeout = setTimeout(() => {
      if (isValid) {
        setImagePreview(imageURL)
        setIsLoading(false)
        return
      }

      setImagePreview('')
      setIsLoading(false)
    }, 1000)
  }

  const handleEditBudgetItem = async () => {
    if (!name || !price || !type || !category) {
      alert('Preencha todos os campos obrigatórios')
      return
    }

    if (link.length && !validateURL(link))
      return alert('O link do produto é inválido')

    try {
      const newPrice = currency(price, { decimal: ',' }).value

      const { data } = await updateBudgetItem({
        variables: {
          data: {
            price: newPrice,
            name,
            budgetType: type,
            category,
            imageURL,
            link
          },
          id
        }
      })

      await publishBudgetItem({
        variables: {
          id: data?.updateBudgetItem?.id
        }
      })

      window.location.reload()
    } catch (error) {
      console.log('Error update budget item', error)
    }

    handleClose()
  }

  const handleDeleteItem = async () => {
    const dialog = window.confirm('Tem certeza que deseja excluir esse item?')

    if (!dialog) return

    try {
      await deleteBudgetItem({
        variables: {
          id
        }
      })

      window.location.reload()
    } catch (error) {
      console.error('Error delete budget item', error)
    }
  }

  useEffect(() => {
    if (budgetItem) {
      setId(budgetItem.id)
      setName(budgetItem.name)
      setPrice(moneyMask(budgetItem.price))
      setType(budgetItem.budgetType)
      setCategory(budgetItem.category)
      setLink(budgetItem.link || '')
      setImageURL(budgetItem.imageURL || '')
      setImagePreview(budgetItem.imageURL || '')
    }
  }, [budgetItem])

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <span className="modal-subtitle">{budgetName}</span>
          <h1 className="modal-title">Editar item</h1>
        </div>
      }
      show={show}
      onClose={handleClose}
      body={
        <div className="flex flex-col gap-10">
          <form action="" className="flex flex-col gap-4">
            <CustomInput
              label="Nome do item"
              placeholder="Ex: Jogo de lençol"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <div className="flex items-center justify-between">
              <CustomInput
                label="Preço"
                placeholder="R$ 0,00"
                value={price}
                onChange={e => setPrice(moneyMask(e.target.value))}
                className="w-32"
                required
              />

              <Select
                label="Categoria"
                onChange={setCategory}
                value={category}
                options={budgetCategories}
                required
                width={56}
              />
            </div>
            <CustomInput
              label="Link"
              optional
              placeholder="Ex: https://www.magazineluiza.com.br"
              value={link}
              onChange={e => setLink(e.target.value)}
            />

            <div className="flex items-center justify-between">
              <Select
                label="Tipo"
                value={type}
                options={budgetTypes}
                onChange={setType}
                required
                width={32}
              />
              <CustomInput
                label="Imagem"
                optional
                placeholder="Ex: https://www.google.com"
                value={imageURL}
                onChange={handleOnImageChange}
                type="url"
                className="w-56"
              />
            </div>

            {isLoading && <Loading />}

            {!isLoading && imagePreview && (
              <div className="flex flex-1 items-center justify-center">
                <img
                  src={imagePreview}
                  alt="preview"
                  className="max-w-full max-h-52 rounded"
                  onError={() => setImagePreview('')}
                />
              </div>
            )}
          </form>
        </div>
      }
      footer={
        <div className="flex flex-1 gap-4 items-center justify-center">
          <Button
            onClick={handleDeleteItem}
            variant="danger"
            size="full"
            type="submit"
            isLoading={deleteLoading}
          >
            Excluir item
          </Button>
          <Button
            onClick={handleEditBudgetItem}
            size="full"
            type="submit"
            isLoading={mutationLoading || publishLoading}
          >
            Editar
          </Button>
        </div>
      }
    />
  )
}
