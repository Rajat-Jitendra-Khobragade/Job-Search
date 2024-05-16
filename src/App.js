import Home from './component/Home'
import Login from './component/Login'
import Jobs from './component/Jobs'
import NotFound from './component/NotFound'
import RouterProtected from './component/RouterProtected'
import { Route,Routes } from 'react-router-dom'
import JobDetails from './component/JobDetails'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<RouterProtected Component = {Home} />} > </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/jobs' element={<RouterProtected Component = {Jobs} />} > </Route>
        <Route path='/jobs/:id' element = {<RouterProtected Component = {JobDetails} />} > </Route>
        <Route path='/*' element={<NotFound />} > </Route>
      </Routes>

    </>
  )
}

export default App;
