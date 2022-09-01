import { useEffect, useState } from 'react'
import {
  GuestList,
  useDeleteGuestListMutation,
  useUpdateGuestListMutation
} from '../graphql/generated'
import { validateURL } from '../utils'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Loading from './Loading'

interface EditBudgetProps {
  show: boolean
  onClose: () => void
  list: GuestList
}

export default function EditBudgetModal(props: EditBudgetProps) {
  const { show, onClose, list } = props

  const [id, setId] = useState(list.id)
  const [listName, setListName] = useState(list.listName)
  const [imageUrl, setImageUrl] = useState(list.imageUrl)
  const [imagePreview, setImagePreview] = useState(list.imageUrl)
  const [isLoading, setIsLoading] = useState(false)

  const [updateList, { loading: mutationLoading }] =
    useUpdateGuestListMutation()
  const [deleteList, { loading: deleteLoading }] = useDeleteGuestListMutation()

  let imageTimeout: any = null

  const handleOnImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageURL = event.target.value

    setImageUrl(imageURL)
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

  const handleOnPreviewError = () => {
    setImagePreview('')
    setIsLoading(false)
  }

  const handleEditList = async () => {
    if (!listName) {
      alert('Preencha o nome da lista')
      return
    }

    try {
      await updateList({
        variables: {
          id,
          imageUrl,
          listName
        }
      })

      window.location.reload()
    } catch (error) {
      console.error('Error editing list', error)
    }
  }

  const handleDeleteList = async () => {
    const dialog = window.confirm('Tem certeza que deseja excluir esta lista?')

    if (!dialog) return

    try {
      await deleteList({
        variables: {
          id
        }
      })

      window.location.href = '/guestsList'
    } catch (error) {
      console.error('Error deleting list', error)
    }
  }

  useEffect(() => {
    setId(list.id)
    setListName(list.listName)
    setImageUrl(list.imageUrl)
    setImagePreview(list.imageUrl)
  }, [list])

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <h1 className="modal-title">Editar lista de convidados</h1>
        </div>
      }
      show={show}
      onClose={onClose}
      body={
        <div className="flex flex-col gap-4">
          <CustomInput
            label="Nome da lista"
            placeholder="Ex: Cerimônia"
            value={listName}
            onChange={e => setListName(e.target.value)}
            required
          />

          <CustomInput
            label="Capa"
            optional
            placeholder="Ex: https://unsplash.com "
            value={imageUrl}
            onChange={handleOnImageChange}
          />

          {isLoading && <Loading />}

          {!isLoading && imagePreview && (
            <div className="flex flex-1 items-center justify-center">
              <img
                src={imagePreview}
                alt="preview"
                className="max-w-full max-h-52 rounded"
                onError={handleOnPreviewError}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          )}
        </div>
      }
      footer={
        <div className="flex flex-1 gap-4 items-center justify-center">
          <Button
            onClick={handleDeleteList}
            variant="danger"
            size="full"
            type="submit"
            isLoading={deleteLoading}
          >
            Excluir lista
          </Button>
          <Button
            onClick={handleEditList}
            variant="primary"
            size="full"
            type="submit"
            isLoading={mutationLoading}
          >
            Editar
          </Button>
        </div>
      }
    />
  )
}
