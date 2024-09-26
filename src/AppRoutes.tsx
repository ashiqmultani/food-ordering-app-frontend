import { Navigate, Route ,Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Homepage from './pages/Homepage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import UserProfilePage from './pages/UserProfilePage'
import ProtectedRoutes from './Auth/ProtectedRoutes'

function AppRoutes() {
  return (
   <Routes>
    <Route path='/' 
    element={<Layout showHero>
      <Homepage/>
    </Layout>}/>
    <Route path='/text' element={<span className='text-3xl'>Text Page</span>}/>
    <Route path='/auth-callback' element={<AuthCallbackPage />}/>
    <Route element = {<ProtectedRoutes/>}>
      <Route path='/user-profile' element={
      <Layout>
      <UserProfilePage/>
      </Layout>} />
    </Route>
    
    <Route path='/*' element={<Navigate to='/' />}/>
   </Routes>
  )
}

export default AppRoutes
