import { useState } from 'react'
import {
  useCreateGuestsListMutation,
  usePublishGuestListMutation
} from '../graphql/generated'
import { validateURL } from '../utils'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Loading from './Loading'

interface AddGuestsListModalProps {
  show: boolean
  onClose: () => void
}

export default function AddGuestsListModal(props: AddGuestsListModalProps) {
  const { show, onClose } = props

  const [listName, setListName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [createList, { loading: mutationLoading }] =
    useCreateGuestsListMutation()
  const [publishList, { loading: publishLoading }] =
    usePublishGuestListMutation()

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

  const handleAddList = async () => {
    try {
      const { data } = await createList({
        variables: {
          data: {
            description: '',
            imageUrl,
            listName
          }
        }
      })

      await publishList({
        variables: {
          id: data?.createGuestList?.id
        }
      })

      window.location.reload()
    } catch (error) {
      console.error('cannot create list', error)
    }
  }

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <h1 className="modal-title">Nova lista de convidados</h1>
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
        <div className="flex flex-1 items-center justify-center">
          <Button
            onClick={handleAddList}
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
