import classNames from 'classnames';
import { CaretRight, CheckCircle } from 'phosphor-react';
import { useState } from 'react';
import Button from '../components/Button';
import CustomInput from '../components/CustomInput';
import HomeAvatar from '../components/HomeAvatar';
import HomeHeader from '../components/HomeHeader';
import Loading from '../components/Loading';
import PageFooter from '../components/PageFooter';

import confirmationCodesMock from '../mocks/confirmationCodes.json';

export default function Home() {
  const [isConfirmedAttendance, setIsConfirmedAttendance] = useState(false);
  const [codeText, setCodeText] = useState('');
  const [guestName, setGuestName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmAttendance = () => {
    setIsLoading(true);
    const confirmationCode = confirmationCodesMock.find(
      item => item.code === codeText
    );

    if (!confirmationCode) {
      alert('Código de confirmação inválido');
      setIsLoading(false);
      return;
    }

    setGuestName(confirmationCode.guestName);

    setIsConfirmedAttendance(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleUndoConfirmation = () => {
    setIsConfirmedAttendance(false);
    setGuestName('');
    setCodeText('');
  };

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

          {isLoading && <Loading />}

          {!isConfirmedAttendance && (
            <div className="flex flex-col items-center gap-4 mt-8 mb-16 transition-all opacity-1 ease-in-out">
              <h1 className="title">Confirme sua presença</h1>

              <div className="flex justify-center items-center gap-4">
                <CustomInput
                  placeholder="Código de confirmação"
                  value={codeText}
                  onChange={e => setCodeText(e.target.value)}
                />
                <Button onClick={handleConfirmAttendance} className="font-bold">
                  <CaretRight />
                </Button>
              </div>
            </div>
          )}

          {isConfirmedAttendance && !isLoading && (
            <div
              className={classNames(
                'flex flex-col items-center gap-4 mt-8 mb-16 transition-opacity ease-in-out duration-700',
                { 'opacity-1': isConfirmedAttendance },
                { 'opacity-0': !isConfirmedAttendance }
              )}
            >
              <p className="flex items-center gap-2 text-3xl font-bold text-terracota-600">
                Confirmado
                <span className=" text-green-600">{guestName}</span>
                <CheckCircle className="text-green-600" weight="fill" />
              </p>
              <p className="text-green-400 mb-8">
                Você confirmou presença para o casamento.
              </p>
              <Button
                onClick={handleUndoConfirmation}
                variant="outline-primary"
                size="lg"
              >
                Cancelar confirmação
              </Button>
            </div>
          )}
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
