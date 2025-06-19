import { Route, Routes } from 'react-router'
import Navbar from './components/Nav/Navbar'
import HomePage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import SplashScreen from './components/SplashScreen/SplashScreen'
import AppContextProvider from './components/Providers/AppContextProvider'
import ExperiencePage from './pages/ExperiencePage'

function App() {

  return (
    <AppContextProvider>
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
          <Route 
            path='/experiences'
            element={<ExperiencePage />}
          />
        </Routes>
      </main>
    </AppContextProvider>
  )
}

export default App
