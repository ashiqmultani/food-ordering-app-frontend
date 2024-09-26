import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import './global.css'
import AppRoutes from './AppRoutes'
import Auth0ProviderWthNagievite from './Auth/Auth0ProviderWthNagievite'
import {QueryClient, QueryClientProvider}  from 'react-query'
import { Toaster } from 'sonner'
const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      refetchOnWindowFocus : false
    }
  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router>
    <QueryClientProvider client={queryClient}>
   
     <Auth0ProviderWthNagievite>
          <>
            <AppRoutes />
            <Toaster visibleToasts={1} position='top-right' richColors />
          </>
     </Auth0ProviderWthNagievite>
   
    </QueryClientProvider>
     </Router>
  </StrictMode>,
)
