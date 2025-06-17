import { Route, Routes } from 'react-router'
import Navbar from './components/Nav/Navbar'
import HomePage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import { useContext } from 'react'
import { AppContext } from './model/context'
import SplashScreen from './components/SplashScreen/SplashScreen'

function App() {

  const AppContextValues = useContext(AppContext)
  return (
    <AppContext.Provider value={AppContextValues}>
      <Navbar />
      <main>
        <Routes>
          <Route 
            path='/'
            element={<SplashScreen />}
          />
          <Route 
            path='/home'
            element={<HomePage />}
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
