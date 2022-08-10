import { useState } from 'react'
import {
  useCreateBudgetMutation,
  usePublishBudgetMutation
} from '../graphql/generated'
import { validateURL } from '../utils'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Loading from './Loading'

interface AddBudgetProps {
  show: boolean
  onClose: () => void
}

export default function AddBudgetModal(props: AddBudgetProps) {
  const { show, onClose } = props

  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [createBudget, { loading: mutationLoading }] = useCreateBudgetMutation()

  const [publishSubscriber, { loading: publishLoading }] =
    usePublishBudgetMutation()

  const handleClose = () => {
    setName('')
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

  const handleOnPreviewError = () => {
    setImagePreview('')
    setIsLoading(false)
  }

  const handleAddBudget = async () => {
    if (!name) {
      alert('Preencha o nome do item')
      return
    }

    try {
      const { data } = await createBudget({
        variables: {
          name,
          imageURL
        }
      })

      await publishSubscriber({
        variables: {
          id: data.createBudget.id
        }
      })

      window.location.reload()
    } catch (error) {
      console.error('Error creating Budget', error)
    }
  }

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <h1 className="modal-title">Novo orçamento</h1>
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
            required
          />

          <CustomInput
            label="Imagem"
            optional
            placeholder="Ex: https://www.google.com"
            value={imageURL}
            onChange={handleOnImageChange}
            type="url"
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
            onClick={handleAddBudget}
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
