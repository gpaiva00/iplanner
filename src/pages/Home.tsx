import classNames from 'classnames'
import { CheckCircle } from 'phosphor-react'
import { useState } from 'react'
import Button from '../components/Button'
import CustomInput from '../components/CustomInput'
import HomeAvatar from '../components/HomeAvatar'
import HomeHeader from '../components/HomeHeader'
import PageFooter from '../components/PageFooter'

import {
  Guest,
  useGetGuestByConfirmationCodeLazyQuery,
  useUpdateConfirmationMutation
} from '../graphql/generated'

export default function Home() {
  const [isConfirmedAttendance, setIsConfirmedAttendance] = useState(false)
  const [code, setCode] = useState('')
  const [guest, setGuest] = useState<Guest | null>(null)

  const [getGuestQuery, { loading: getGuestQueryLoading }] =
    useGetGuestByConfirmationCodeLazyQuery()
  const [updateConfirmation, { loading: updateConfirmationLoading }] =
    useUpdateConfirmationMutation()

  const handleConfirmAttendance = async () => {
    if (!code) {
      alert('Digite o código de confirmação')
      return
    }

    try {
      const { data } = await getGuestQuery({
        variables: {
          confirmationCode: code
        }
      })

      if (!data?.guest?.id) {
        alert('Código de confirmação inválido')
        return
      }

      await updateConfirmation({
        variables: {
          guestId: data.guest.id,
          response: true
        }
      })

      setGuest({
        name: data.guest.name,
        id: data.guest.id
      })

      setIsConfirmedAttendance(true)
    } catch (error) {
      console.error('Cannot update confirmation:', error)
    }
  }

  const handleUndoConfirmation = async () => {
    const dialog = window.confirm(
      'Tem certeza que deseja cancelar sua presença?'
    )

    if (!dialog) return

    try {
      await updateConfirmation({
        variables: {
          guestId: guest?.id,
          response: false
        }
      })

      setIsConfirmedAttendance(false)
      setGuest(null)
      setCode('')
      alert('Sua confirmação foi cancelada')
    } catch (error) {
      console.error('Cannot undo confirmation: ', error)
    }
  }

  const isLoading = !!updateConfirmationLoading || !!getGuestQueryLoading

  return (
    <div className="gradient-background flex flex-col min-h-screen">
      <HomeHeader />

      <div className="flex flex-col flex-1 justify-center items-center">
        <HomeAvatar />

        <div className="flex flex-col gap-24 justify-center items-center">
          {/* <div className="flex flex-col gap-2 items-end">
            <h1 className="text-4xl font-bold italic text-terracota-600">CASAMENTO JU&GABS</h1>
            <p className="text-green-600 font-bold">15/12/2023</p>
          </div> */}

          {!isConfirmedAttendance && (
            <div className="flex flex-col items-center gap-4 mt-8 mb-16 transition-all opacity-1 ease-in-out">
              <h1 className="title">Confirme sua presença</h1>

              <div className="flex flex-col justify-center items-center gap-4">
                <CustomInput
                  placeholder="Código de confirmação"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                />
                <Button
                  onClick={handleConfirmAttendance}
                  size="full"
                  isLoading={isLoading}
                >
                  Confirmar
                </Button>
              </div>
            </div>
          )}

          {isConfirmedAttendance && (
            <div
              className={classNames(
                'flex flex-col items-center gap-4 mt-8 mb-16 transition-opacity ease-in-out duration-700',
                { 'opacity-1': isConfirmedAttendance },
                { 'opacity-0': !isConfirmedAttendance }
              )}
            >
              <p className="flex items-center gap-2 text-3xl font-bold text-terracota-600">
                Confirmado
                <span className=" text-green-600">{guest?.name}</span>
                <CheckCircle className="text-green-600" weight="fill" />
              </p>
              <p className="text-green-600 mb-8">
                Você confirmou presença para o casamento.
              </p>
              <Button
                onClick={handleUndoConfirmation}
                variant="outline-primary"
                size="full"
                isLoading={isLoading}
              >
                Desfazer confirmação
              </Button>
            </div>
          )}
        </div>
      </div>
      <PageFooter />
    </div>
  )
}
