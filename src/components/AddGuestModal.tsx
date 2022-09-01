import { useState } from 'react'
import {
  useCreateGuestMutation,
  usePublishGuestMutation
} from '../graphql/generated'
import generateRandomAlphaNumericCode from '../utils/generateRandomCode'
import phoneMask from '../utils/phoneMask'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'

interface AddGuestModalProps {
  show: boolean
  onClose: () => void
  listId: string
}

export default function AddGuestModal(props: AddGuestModalProps) {
  const { show, onClose, listId } = props

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [createGuest, { loading: mutationLoading }] = useCreateGuestMutation()
  const [publishGuest, { loading: publishLoading }] = usePublishGuestMutation()

  const handleAddGuestsList = async () => {
    if (!name) return alert('Preencha o nome do convidado')

    try {
      const { data } = await createGuest({
        variables: {
          listId,
          name,
          phone,
          confirmationCode: generateRandomAlphaNumericCode({
            prefix: 'JG',
            length: 4
          })
        }
      })

      const guestId = data?.createGuest?.id

      await publishGuest({
        variables: {
          id: guestId
        }
      })

      window.location.reload()
    } catch (error) {
      console.error('cannot create guest', error)
    }
  }

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <h1 className="modal-title">Novo convidado</h1>
        </div>
      }
      show={show}
      onClose={onClose}
      body={
        <div className="flex flex-col gap-4">
          <CustomInput
            label="Nome do convidado"
            placeholder="Ex: Julia Maris"
            value={name}
            onChange={e => setName(e.target.value)}
            autoCapitalize="words"
            required
            autoFocus
          />

          <CustomInput
            label="Telefone para contato"
            optional
            placeholder="Ex: (11) 99999-9999"
            value={phone}
            onChange={e => setPhone(phoneMask(e.target.value))}
          />
        </div>
      }
      footer={
        <div className="flex flex-1 items-center justify-center">
          <Button
            onClick={handleAddGuestsList}
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
