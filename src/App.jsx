import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route, 
} from 'react-router-dom'

import Home from './components/Layout/Home/Home'
import About from './components/Layout/About/About'
import Vans, { loader as vansLoader } from './components/Layout/Vans/Vans'
import VanDetail, { loader as vanDetailLoader } from "./components/Layout/Vans/VanDetail/VanDetail"
import PageNotFound from './components/Layout/PageNotFound/PageNotFound'
import Layout from './components/Layout/Layout'
import HostLayout from "./components/Layout/Host/HostLayout"
import Dashboard, { loader as hostDashboardLoader } from './components/Layout/Host/Dashboard/Dashboard'
import Income from "./components/Layout/Host/Income/Income"
import Reviews from './components/Layout/Host/Reviews/Reviews'

import HostVans, { loader as hostVansLoader } from './components/Layout/Host/HostVans/HostVans/HostVans'
import HostVanDetailLayout, { loader as hostVanDetailLoader } from './components/Layout/Host/HostVans/HostVanDetail/HostVanDetailLayout'
import Details from './components/Layout/Host/HostVans/HostVanDetail/Details/Details'
import Pricing from './components/Layout/Host/HostVans/HostVanDetail/Pricing/Pricing'
import Photos from './components/Layout/Host/HostVans/HostVanDetail/Photos/Photos'
import Login, {action as loginAction, loader as loginLoader} from './components/Layout/Login/Login'
import Error from './components/Layout/Error/Error'
import ErrorHost from './components/Layout/Host/ErrorHost/ErrorHost'

// import "./server"
import { requireAuth } from './utils'



/* Layout route will always get rendered. 
    The route present inside will get rendered only if Outlet
    component is provided */
/* Absolute routes are relative to the parent route or 
    initial website for ex-www.example.com whereas
    relative routes are relative to their parent route */
  

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} errorElement={ <Error /> } > 
    <Route index element = {<Home />} /> 
    
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />}  loader={vansLoader} />
    <Route path="login" element={ <Login /> } loader = {loginLoader} action={loginAction}/>
    <Route path ="vans/:id" element={<VanDetail />} loader = { vanDetailLoader } />


    <Route path = "host" element={<HostLayout />} loader = { async() =>  await requireAuth() } >
        <Route index element = {<Dashboard />} loader = {hostDashboardLoader} /> 
        <Route path = "income" element={<Income />} loader = { async() =>  await requireAuth() } />
        <Route path = "vans" element={<HostVans />} loader = {hostVansLoader}/>
        <Route path = "vans/:id" element={<HostVanDetailLayout />} loader = {hostVanDetailLoader} errorElement= {<ErrorHost />} >
            <Route index element= {<Details />} loader = { async() =>  await requireAuth() } />
            <Route path="pricing" element= {<Pricing />} loader = { async() =>  await requireAuth() } />
            <Route path= "photos" element= {<Photos />} loader = { async() =>  await requireAuth() } />
        </Route>
        <Route path = "reviews" element={<Reviews />}/>
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Route>
))

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App