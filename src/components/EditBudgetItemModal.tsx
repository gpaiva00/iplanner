import { useEffect, useState } from 'react'
import { BudgetItem } from '../interfaces/Budget'
import { validateURL } from '../utils'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Loading from './Loading'
import Select from './Select'

interface EditBudgetItemModalProps {
  show: boolean
  onClose: () => void
  budgetName: string
  budgetItem: BudgetItem
}

export default function EditBudgetItemModal(props: EditBudgetItemModalProps) {
  const { show, onClose, budgetItem, budgetName } = props

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleClose = () => {
    setName('')
    setPrice('')
    setType('')
    setCategory('')
    setLink('')
    setImage('')
    setImagePreview('')
    onClose()
  }

  let imageTimeout: any = null

  const handleOnImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageURL = event.target.value

    setImage(imageURL)
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

    //  TODO: add budget to database

    handleClose()
  }

  useEffect(() => {
    if (budgetItem) {
      setName(budgetItem.name)
      setPrice(parseFloat(budgetItem.price).toFixed(2))
      setType(budgetItem.type)
      setCategory(budgetItem.category)
      setLink(budgetItem.link || '')
      setImage(budgetItem.image || '')
      setImagePreview(budgetItem.image || '')
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
                onChange={e => setPrice(e.target.value)}
                type="number"
                className="w-32"
                required
              />

              <Select
                label="Categoria"
                onChange={setCategory}
                value={category}
                options={[
                  { text: 'Cama', value: 'cama' },
                  { text: 'Banho', value: 'banho' },
                  { text: 'Sala', value: 'sala' },
                  { text: 'Quarto', value: 'quarto' },
                  { text: 'Cozinha', value: 'cozinha' },
                  { text: 'Outros', value: 'outros' }
                ]}
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
                options={[
                  { value: 'wishlist', text: 'Lista de desejos' },
                  { value: 'purchased', text: 'Comprado' }
                ]}
                onChange={setType}
                required
                width={32}
              />
              <CustomInput
                label="Imagem"
                optional
                placeholder="Ex: https://www.google.com"
                value={image}
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
            onClick={handleEditBudgetItem}
            variant="primary"
            size="full"
            type="submit"
          >
            Editar
          </Button>
        </div>
      }
    />
  )
}
