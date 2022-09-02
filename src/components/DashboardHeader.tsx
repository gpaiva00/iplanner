import classNames from 'classnames'
import { Avatar, Dropdown } from 'flowbite-react'
import { SignOut } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_ICON_SIZE } from '../common/iconSizes'
import { useAuth } from '../hooks/useAuth'

interface DashboardHeaderProps {}

export default function DashboardHeader(props: DashboardHeaderProps) {
  const { pathname } = useLocation()
  const { logout } = useAuth()

  return (
    <div className="w-full flex px-10 py-5 bg-slate-50 border-b border-b-zinc-300">
      <a href="/" className="header-title">
        iPlanner
      </a>

      <div className="flex flex-1 gap-10 items-center opacity-0 md:opacity-100">
        <a
          href="/dashboard"
          className={classNames('header-menu', {
            'header-menu-selected': pathname === '/dashboard'
          })}
        >
          Início
        </a>
        <a
          href="/budgets"
          className={classNames('header-menu', {
            'header-menu-selected': pathname.includes('budget')
          })}
        >
          Orçamentos
        </a>
        <a
          href="/guestsList"
          className={classNames('header-menu', {
            'header-menu-selected': pathname.includes('guest')
          })}
        >
          Convidados
        </a>
      </div>

      <div className="flex flex-1 gap-8 justify-end items-center">
        <Dropdown
          label={
            <Avatar
              alt="Configurações"
              img="/ju-logo.png"
              rounded={true}
              size="md"
            />
          }
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Item
            onClick={() => alert('Funcionalidade ainda não implementada')}
          >
            Configurações
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => alert('Funcionalidade ainda não implementada')}
          >
            Conta
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>
            <span className="text-red-500 flex gap-2">
              <SignOut size={DEFAULT_ICON_SIZE} />
              Sair
            </span>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  )
}
