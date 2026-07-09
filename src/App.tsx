import { useState } from 'react'
import HomePage from './pages/HomePage'
import SteelPage from './pages/SteelPage'
import DecorPage from './pages/DecorPage'
import AcPage from './pages/AcPage'

export type Page = 'home' | 'steel' | 'decor' | 'ac'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'steel' && <SteelPage navigate={navigate} />}
      {currentPage === 'decor' && <DecorPage navigate={navigate} />}
      {currentPage === 'ac' && <AcPage navigate={navigate} />}
    </>
  )
}
