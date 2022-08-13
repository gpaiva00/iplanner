import React, { FC } from 'react'
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  useNavigate
} from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
}

const Route: FC<RouteProps> = ({ isPrivate = false, ...props }) => {
  const { user } = useAuth()
  console.warn({ user })

  return <>{isPrivate === !!user && <ReactDOMRoute {...props} />}</>
}

export default Route
