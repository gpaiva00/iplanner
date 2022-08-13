import { AuthProvider } from './useAuth'

export default function AppProvider({ children }) =>
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
