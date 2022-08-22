import currency from 'currency.js'
import { useState } from 'react'
import budgetCategories from '../common/budgetCategories'
import budgetTypes from '../common/budgetTypes'
import {
  Budget,
  BudgetType,
  Category,
  useCreateBudgetItemMutation,
  usePublishBudgetItemMutation
} from '../graphql/generated'
import { validateURL } from '../utils'
import { formatToCurrency, moneyMask } from '../utils/formatToCurrency'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Loading from './Loading'
import Select from './Select'

interface AddBudgetItemModalProps {
  show: boolean
  onClose: () => void
  budget: Budget
}

export default function AddBudgetItemModal(props: AddBudgetItemModalProps) {
  const { show, onClose, budget } = props

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState<BudgetType>(BudgetType.Wishlist)
  const [category, setCategory] = useState<Category>(Category.Cama)
  const [link, setLink] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [createBudgetItem, { loading: mutationLoading }] =
    useCreateBudgetItemMutation()
  const [publishBudgetItem, { loading: publishLoading }] =
    usePublishBudgetItemMutation()

  const handleClose = () => {
    setName('')
    setPrice('')
    setType(BudgetType.Wishlist)
    setCategory(Category.Cama)
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

  const handleAddBudgetItem = async () => {
    if (!name || !price || !type || !category) {
      alert('Preencha todos os campos obrigatórios')
      return
    }

    if (link.length && !validateURL(link))
      return alert('O link do produto é inválido')

    try {
      const newPrice = currency(price.replace(',', '.')).value

      console.warn({ newPrice })
      

      // const { data } = await createBudgetItem({
      //   variables: {
      //     name,
      //     price: newPrice,
      //     budgetType: type,
      //     category,
      //     link,
      //     imageURL,
      //     budgetId: budget.id
      //   }
      // })

      // await publishBudgetItem({
      //   variables: {
      //     id: data?.createBudgetItem?.id
      //   }
      // })

      // window.location.reload()
    } catch (error) {
      console.log('Error create budget item', error)
    }
  }

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <span className="modal-subtitle">{budget.name}</span>
          <h1 className="modal-title">Novo item</h1>
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
        <div className="flex flex-1 items-center justify-center">
          <Button
            onClick={handleAddBudgetItem}
            variant="primary"
            size="full"
            type="submit"
            isLoading={mutationLoading || publishLoading}
          >
            Adicionar
          </Button>
        </div>
      }
    />
  )
}
