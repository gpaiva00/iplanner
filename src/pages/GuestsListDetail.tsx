import { Checkbox, Table } from 'flowbite-react'
import { PencilSimple, Plus, TrashSimple } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_GUEST, DEFAULT_GUESTS_LIST } from '../common/defaultGuestsList'
import { DEFAULT_ICON_SIZE } from '../common/iconSizes'
import AddGuestModal from '../components/AddGuestModal'
import Badge from '../components/Badge'
import Button from '../components/Button'
import DashboardHeader from '../components/DashboardHeader'
import EditGuestListModal from '../components/EditGuestListModal'
import EditGuestModal from '../components/EditGuestModal'
import Loading from '../components/Loading'
import NoContentPlaceholder from '../components/NoContentPlaceholder'
import PageFooter from '../components/PageFooter'
import {
  Guest,
  GuestList,
  useDeleteGuestMutation,
  useDeleteGuestsMutation,
  useGetGuestsFromListLazyQuery
} from '../graphql/generated'
import { getConfirmedGuests } from '../utils/guests'

interface StateProps {
  state: {
    list: GuestList
  }
}

export default function GuestsListDetail() {
  const { state } = useLocation() as StateProps

  const [guests, setGuests] = useState<GuestList>(() => ({
    ...DEFAULT_GUESTS_LIST,
    listName: state?.list?.listName
  }))
  const [selectedGuests, setSelectedGuests] = useState<string[]>([])

  const [showAddGuestModal, setShowAddGuestModal] = useState(false)
  const [showEditGuestModal, setShowEditGuestModal] = useState(false)
  const [showEditListModal, setShowEditListModal] = useState(false)

  const [editGuest, setEditGuest] = useState<Guest>(DEFAULT_GUEST)
  const [getList, { loading: queryLoading }] = useGetGuestsFromListLazyQuery()
  const [deleteGuest, { loading: deleteLoading }] = useDeleteGuestMutation()
  const [deleteSelectedGuests, { loading: deleteSelectedLoading }] =
    useDeleteGuestsMutation()

  const loadList = async () => {
    try {
      const { data } = await getList({
        variables: {
          id: state.list.id
        }
      })

      setGuests(data?.guestList)
    } catch (error) {
      console.error('cannot get list', error)
    }
  }

  const renderDescription = (list: GuestList) => {
    if (queryLoading || !list.items.length) return

    const confirmedGuests = getConfirmedGuests(list.items)

    return (
      <span className="description gap-1">
        <span>{`${list.items?.length ?? 0}`}</span>
        <span>{`${list.items?.length > 1 ? 'convidados' : 'convidado'}`}</span>
        &#183;
        {!confirmedGuests.length && <span>Nenhum confirmado por enquanto</span>}
        {!!confirmedGuests.length && (
          <>
            <span>{confirmedGuests.length}</span>
            <span>{`${
              confirmedGuests.length > 1 ? 'confirmados' : 'confirmado'
            }`}</span>
          </>
        )}
      </span>
    )
  }

  const renderGuestResponse = (response: boolean) => {
    const responses = {
      true: (
        <Badge type="success" textAlign="center">
          {/* <Check size={SMALL_ICON_SIZE} /> */}
          Confirmado
        </Badge>
      ),
      false: (
        <Badge type="danger" textAlign="center">
          {/* <X size={SMALL_ICON_SIZE} /> */}
          Não comparecerá
        </Badge>
      ),
      null: (
        <Badge type="dark" textAlign="center">
          {/* <Question size={SMALL_ICON_SIZE} /> */}
          Sem resposta
        </Badge>
      )
    }

    return responses[response]
  }

  const handleSelectGuest = (guestId: string) => {
    const isGuestSelected = selectedGuests.includes(guestId)

    if (isGuestSelected)
      setSelectedGuests([...selectedGuests.filter(id => id !== guestId)])
    else setSelectedGuests([...selectedGuests, guestId])
  }

  const handleSelectAllGuests = () => {
    if (selectedGuests.length === guests.items.length) setSelectedGuests([])
    else setSelectedGuests(guests.items.map(guest => guest.id))
  }

  const handleDeleteGuest = async ({
    id,
    name
  }: {
    id: string
    name: string
  }) => {
    if (!!selectedGuests.length) return handleDeleteSelectedGuests()

    const dialog = window.confirm(`Tem certeza que deseja excluir ${name}?`)

    if (!dialog) return

    await deleteGuest({
      variables: {
        id
      }
    })

    window.location.reload()
  }

  const handleDeleteSelectedGuests = async () => {
    const dialog = window.confirm(
      `Tem certeza que deseja excluir os convidados selecionados?`
    )

    if (!dialog) return

    await deleteSelectedGuests({
      variables: {
        ids: selectedGuests
      }
    })

    window.location.reload()
  }

  const handleSelectGuestToEdit = (guest: Guest) => {
    setEditGuest(guest)
    setShowEditGuestModal(true)
  }

  useEffect(() => {
    if (state === null) {
      location.href = '/dashboard'
      return
    }

    loadList()
  }, [])

  return (
    <div className="default-background">
      <DashboardHeader />

      <div className="flex flex-1 flex-col w-full">
        <div className="flex gap-4 justify-end px-10 py-10">
          <div className="flex flex-col flex-1">
            <h1 className="title">{guests.listName}</h1>
            {renderDescription(guests)}
          </div>

          <Button
            onClick={() => setShowEditListModal(true)}
            icon={<PencilSimple weight="fill" size={18} />}
            variant="outline-primary"
          >
            Lista
          </Button>
          <Button
            onClick={() => setShowAddGuestModal(true)}
            icon={<Plus weight="bold" size={DEFAULT_ICON_SIZE} />}
          >
            Convidado
          </Button>
        </div>

        <div className="flex flex-1 flex-wrap gap-8 justify-center items-center px-16 pb-32">
          {queryLoading && <Loading />}

          {!queryLoading && !guests.items.length && (
            <NoContentPlaceholder
              title="Esta lista está vazia"
              description="Clique no botão acima para adicionar um convidado"
            />
          )}

          {!queryLoading && !!guests.items.length && (
            <Table hoverable={true}>
              <Table.Head>
                <Table.HeadCell className="!p-4">
                  <Checkbox
                    checked={selectedGuests.length === guests.items.length}
                    onClick={handleSelectAllGuests}
                  />
                </Table.HeadCell>
                <Table.HeadCell>Nome</Table.HeadCell>
                <Table.HeadCell>Telefone</Table.HeadCell>
                <Table.HeadCell>Código de confirmação</Table.HeadCell>
                <Table.HeadCell>Resposta</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Editar</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {guests.items.map(guest => {
                  return (
                    <Table.Row
                      key={guest.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="!p-4">
                        <Checkbox
                          checked={selectedGuests.includes(guest.id)}
                          onClick={() => handleSelectGuest(guest.id)}
                        />
                      </Table.Cell>
                      <Table.Cell
                        onClick={() => handleSelectGuestToEdit(guest)}
                        className="whitespace-nowrap text-primary hover:underline cursor-pointer dark:text-white capitalize"
                      >
                        {guest.name}
                      </Table.Cell>
                      <Table.Cell>{guest.phone}</Table.Cell>
                      <Table.Cell>{guest.confirmationCode}</Table.Cell>
                      <Table.Cell align="center">
                        {renderGuestResponse(guest.response)}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          onClick={() =>
                            handleDeleteGuest({
                              id: guest.id,
                              name: guest.name
                            })
                          }
                          isLoading={deleteLoading || deleteSelectedLoading}
                          variant="no-border-danger"
                          icon={
                            <TrashSimple
                              weight="fill"
                              size={DEFAULT_ICON_SIZE}
                            />
                          }
                        />
                      </Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
          )}
        </div>
      </div>

      <AddGuestModal
        onClose={() => setShowAddGuestModal(false)}
        show={showAddGuestModal}
        listId={state?.list.id}
      />

      <EditGuestModal
        onClose={() => setShowEditGuestModal(false)}
        show={showEditGuestModal}
        guest={editGuest}
      />

      <EditGuestListModal
        onClose={() => setShowEditListModal(false)}
        show={showEditListModal}
        list={state?.list}
      />

      <PageFooter />
    </div>
  )
}
