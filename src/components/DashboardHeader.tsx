import classNames from 'classnames'
import { Avatar, Dropdown } from 'flowbite-react'
import { Bell } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
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

      <div className="flex flex-1 gap-10 items-center">
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
            <Bell
              size={28}
              weight="fill"
              className="text-zinc-700 hover:text-primary transition-colors"
            />
          }
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Item>Notificação 1</Dropdown.Item>
          <Dropdown.Item>Notificação 2</Dropdown.Item>
        </Dropdown>

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
          <Dropdown.Item>Configurações</Dropdown.Item>
          <Dropdown.Item>Conta</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  )
}
