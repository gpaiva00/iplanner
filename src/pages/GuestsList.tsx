import { Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DEFAULT_ICON_SIZE } from '../common/iconSizes'
import AddGuestsListModal from '../components/AddGuestsListModal'
import Button from '../components/Button'
import Card from '../components/Card'
import DashboardHeader from '../components/DashboardHeader'
import Loading from '../components/Loading'
import NoContentPlaceholder from '../components/NoContentPlaceholder'
import PageFooter from '../components/PageFooter'
import {
  GuestList,
  useGetAllGuestQuery,
  useGetGuestsListsLazyQuery
} from '../graphql/generated'

export default function GuestsList() {
  const [showAddGuestsListModal, setShowAddGuestsListModal] = useState(false)
  const [lists, setLists] = useState<GuestList[]>()
  const navigate = useNavigate()

  const [getLists, { loading: getListsLoading }] = useGetGuestsListsLazyQuery()
  const { data: allGuests } = useGetAllGuestQuery()

  const handleAddGuestsList = () => setShowAddGuestsListModal(true)

  const getGuestsLists = async () => {
    try {
      const { data } = await getLists()
      setLists(data?.guestLists)
    } catch (error) {
      console.error('cannot load lists', error)
    }
  }

  const handleListClick = (list: GuestList) => {
    navigate('/guestsListDetail', {
      state: {
        list
      }
    })
  }

  const renderDescription = (lists: GuestList[]) => {
    if (getListsLoading || !lists?.length) return

    return (
      <span className="description gap-1">
        <span>{`${lists?.length ?? 0}`}</span>
        <span>{`${lists?.length > 1 ? 'listas' : 'lista'}`}</span>
        {!!allGuests?.guests.length && (
          <>
            <span className="font-bold text-xl">&#183;</span>
            <span>
              {allGuests?.guests.length}
              <span>{`${
                allGuests?.guests.length > 1 ? ' convidados' : ' convidado'
              }`}</span>
            </span>
          </>
        )}
      </span>
    )
  }

  useEffect(() => {
    getGuestsLists()
  }, [])

  return (
    <div className="default-background">
      <DashboardHeader />

      <div className="flex flex-1 flex-col w-full">
        <div className="flex gap-4 justify-end px-10 py-10">
          <div className="flex flex-col flex-1">
            <h1 className="title">Listas de convidados</h1>
            {renderDescription(lists)}
          </div>
          <Button
            onClick={handleAddGuestsList}
            icon={<Plus weight="bold" size={DEFAULT_ICON_SIZE} />}
          >
            Lista
          </Button>
        </div>

        <div className="flex flex-1 flex-wrap gap-8 justify-center items-center px-16 pb-32">
          {getListsLoading && <Loading />}

          {!getListsLoading && !lists?.length && (
            <NoContentPlaceholder
              title="Você ainda não possui nenhuma lista"
              description="Clique no botão acima para criar sua primeira lista de convidados"
            />
          )}

          {!getListsLoading &&
            lists?.map(list => (
              <Card imgSrc={list.imageUrl} key={list.id}>
                <h1
                  onClick={() => handleListClick(list)}
                  className="card-title cursor-pointer"
                >
                  {list.listName}
                </h1>
                <p className="card-description">{list.description}</p>
              </Card>
            ))}
        </div>
      </div>

      <AddGuestsListModal
        show={showAddGuestsListModal}
        onClose={() => setShowAddGuestsListModal(false)}
      />

      <PageFooter />
    </div>
  )
}
