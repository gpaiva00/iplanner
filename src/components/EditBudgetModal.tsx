import { useEffect, useState } from 'react'
import {
  Budget,
  useDeleteBudgetMutationMutation,
  usePublishBudgetMutation,
  useUpdateBudgetMutationMutation
} from '../graphql/generated'
import { validateURL } from '../utils'
import Button from './Button'
import CustomInput from './CustomInput'
import CustomModal from './CustomModal'
import Loading from './Loading'

interface EditBudgetProps {
  show: boolean
  onClose: () => void
  budget: Budget
}

export default function EditBudgetModal(props: EditBudgetProps) {
  const { show, onClose, budget } = props
  const [id, setId] = useState(budget.id)
  const [name, setName] = useState(budget.name)
  const [imageURL, setImageURL] = useState(budget.imageURL)
  const [imagePreview, setImagePreview] = useState(budget.imageURL)
  const [isLoading, setIsLoading] = useState(false)

  const [updateBudget, { loading: mutationLoading }] =
    useUpdateBudgetMutationMutation()
  const [deleteBudget, { loading: deleteLoading }] =
    useDeleteBudgetMutationMutation()
  const [publishBudget, { loading: publishLoading }] =
    usePublishBudgetMutation()

  const handleClose = () => {
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

  const handleEditBudget = async () => {
    if (!name) {
      alert('Preencha o nome do item')
      return
    }

    try {
      await updateBudget({
        variables: {
          data: {
            name,
            imageURL
          },
          id
        }
      })

      await publishBudget({
        variables: {
          id
        }
      })

      window.location.reload()
    } catch (error) {
      console.error('Error creating Budget', error)
    }
  }

  const handleDeleteBudget = async () => {
    const dialog = window.confirm(
      'Tem certeza que deseja excluir este orçamento?'
    )

    if (!dialog) return

    try {
      await deleteBudget({
        variables: {
          id
        }
      })

      window.location.href = '/budgets'
    } catch (error) {
      console.error('Error deleting Budget', error)
    }
  }

  useEffect(() => {
    setId(budget.id)
    setName(budget.name)
    setImageURL(budget.imageURL)
    setImagePreview(budget.imageURL)
  }, [budget])

  return (
    <CustomModal
      size={'md'}
      title={
        <div className="flex flex-col justify-center">
          <h1 className="modal-title">Editar orçamento</h1>
        </div>
      }
      show={show}
      onClose={handleClose}
      body={
        <div className="flex flex-col gap-4">
          <CustomInput
            label="Nome do orçamento"
            placeholder="Ex: Jogo de lençol"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <CustomInput
            label="Capa"
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
        <div className="flex flex-1 gap-4 items-center justify-center">
          <Button
            onClick={handleDeleteBudget}
            variant="danger"
            size="full"
            type="submit"
            isLoading={deleteLoading}
          >
            Excluir orçamento
          </Button>
          <Button
            onClick={handleEditBudget}
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
