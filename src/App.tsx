import { Route, Routes } from 'react-router'
import Navbar from './components/Nav/Navbar'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import { useContext } from 'react'
import { AppContext } from './model/context'

function App() {

  const AppContextValues = useContext(AppContext)
  return (
    <AppContext.Provider value={AppContextValues}>
      <Navbar />
      <main>
        <Routes>
          <Route 
            path='/'
            element={<HomePage />}
          >
          </Route>
          <Route 
            path='/about'
            element={<AboutPage />}
          >
          </Route>
        </Routes>
      </main>
    </AppContext.Provider>
  )
}

export default App
