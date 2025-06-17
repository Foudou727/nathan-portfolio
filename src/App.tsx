import { Route, Routes } from 'react-router'
import Navbar from './components/Nav/Navbar'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import { useContext } from 'react'
import { AppContext } from './model/context'
import HomePage from './pages/HomePage'

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
          />
          <Route 
            path='/about'
            element={<AboutPage />}
          />
          <Route 
            path='/projects'
            element={<ProjectPage />}
          />
        </Routes>
      </main>
    </AppContext.Provider>
  )
}

export default App
