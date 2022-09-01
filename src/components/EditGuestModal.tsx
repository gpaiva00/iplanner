import { useEffect, useState } from 'react'
import {
  Guest,
  usePublishGuestMutation,
  useUpdateGuestMutation
} from '../graphql/generated'
import phoneMask from '../utils/phoneMask'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'

interface AddGuestModalProps {
  show: boolean
  onClose: () => void
  guest: Guest
}

export default function AddGuestModal(props: AddGuestModalProps) {
  const { show, onClose, guest } = props

  const [name, setName] = useState(guest.name)
  const [phone, setPhone] = useState(guest.phone)

  const [updateGuest, { loading: mutationLoading }] = useUpdateGuestMutation()
  const [publishGuest, { loading: publishLoading }] = usePublishGuestMutation()

  const handleEditGuest = async () => {
    if (!name) return alert('Preencha o nome do convidado')

    try {
      const { data } = await updateGuest({
        variables: {
          id: guest.id,
          name,
          phone,
          response: guest.response
        }
      })

      const guestId = data?.updateGuest?.id

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

  useEffect(() => {
    setName(guest.name)
    setPhone(guest.phone)
  }, [guest])

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <h1 className="modal-title">Editar convidado</h1>
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
            onClick={handleEditGuest}
            variant="primary"
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
