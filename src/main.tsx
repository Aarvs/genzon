
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
<<<<<<< HEAD
      domain='dev-onayv68m8z6yy8nq.us.auth0.com'
      clientId='1rfeVwGizTJT5ugAZfrgIIddv8MOGI54'
=======
      domain=Process.env.DOMAIN 
      clientId=process.env.CLIENT_ID
>>>>>>> 37f89f80e1ee5612bc82f5ea0e9b0b8b1cd59d7d
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
