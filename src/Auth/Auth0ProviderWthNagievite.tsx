
import {AppState, Auth0Provider} from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';

type Props = {
    children : React.ReactNode;
}

function Auth0ProviderWthNagievite({children} : Props) {
    const domain = import.meta.env.VITE_AUTH_DOMEN;
    const clientId = import.meta.env.VITE_AUTH_CLIENT_ID;
    const redirectUrl = import.meta.env.VITE_AUTH_CALL_URL;
    const audience = import.meta.env.VITE_AUTH_AUDIENCE;
    const navigate = useNavigate();
    if(!domain || ! clientId || ! redirectUrl || !audience){
        console.log("Unable to initialized Auth");
    }
    const onRedirectCallback = (appState?: AppState) => {
       navigate(appState?.returnTo || "/auth-callback");
    };
  return (
    <div>
      <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
        redirect_uri : redirectUrl ,
        audience
      }}
      onRedirectCallback={onRedirectCallback}>
        {children}
      </Auth0Provider>
    </div>
  )
}


export default Auth0ProviderWthNagievite

