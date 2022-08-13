import { Router } from './Router'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { AuthProvider } from './hooks/useAuth'

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default App
