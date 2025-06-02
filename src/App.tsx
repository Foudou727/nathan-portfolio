import { Route, Routes } from 'react-router'
import Navbar from './components/Nav/Navbar'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
