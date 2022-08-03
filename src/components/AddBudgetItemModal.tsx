import { CircleNotch } from 'phosphor-react'
import { useState } from 'react'
import { Budget } from '../interfaces/Budget'
import { validateURL } from '../utils'
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

  const handleAddBudgetItem = async () => {
    if (!name || !price || !type || !category) {
      alert('Preencha todos os campos obrigatórios')
      return
    }

    //  TODO: add budget to database

    handleClose()
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
                onChange={e => setPrice(e.target.value)}
                type="number"
                className="w-32"
                required
              />

              <Select
                label="Categoria"
                onChange={setCategory}
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
              {/* <div className="flex flex-col gap-2">
                <label className="block text-zinc-900 text-sm font-bold">
                  Tipo
                </label>
                <select
                  className="rounded focus:outline-none w-32"
                  onChange={e => setType(e.target.value)}
                  required
                >
                  <option value="">Tipo</option>
                  <option value="wishlist">Lista de desejos</option>
                  <option value="purchased">Comprado</option>
                </select>
              </div> */}
              <Select
                label="Tipo"
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
            onClick={handleAddBudgetItem}
            variant="primary"
            size="full"
            type="submit"
          >
            Adicionar
          </Button>
        </div>
      }
    />
  )
}
