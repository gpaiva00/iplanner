import { useState } from 'react'
import { Budget } from '../interfaces/Budget'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Select from './Select'

interface FilterModal {
  show: boolean
  onClose: () => void
  budget: Budget
}

export default function FilterModal(props: FilterModal) {
  const { show, onClose, budget } = props

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  const handleClose = () => {
    setName('')
    setType('')
    setCategory('')
    onClose()
  }

  let filterTimeout: any = null

  const handleFilterBy = async () => {
    if (!name && !type && !category) {
      alert('Selecione pelo menos um filtro')
      return
    }

    //  TODO: filter items

    handleClose()
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
            onChange={setCategory}
            options={[
              { text: 'Qualquer uma', value: '' },
              { text: 'Cama', value: 'cama' },
              { text: 'Banho', value: 'banho' },
              { text: 'Sala', value: 'sala' },
              { text: 'Quarto', value: 'quarto' },
              { text: 'Cozinha', value: 'cozinha' },
              { text: 'Outros', value: 'outros' }
            ]}
          />

          <Select
            label="Tipo"
            options={[
              { text: 'Qualquer um', value: '' },
              { value: 'wishlist', text: 'Lista de desejos' },
              { value: 'purchased', text: 'Comprado' }
            ]}
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
          >
            Filtrar
          </Button>
        </div>
      }
    />
  )
}
