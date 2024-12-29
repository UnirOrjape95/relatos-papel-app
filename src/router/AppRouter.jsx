import { Route, Routes } from 'react-router-dom'


import { BookRouter } from '../books/router/BookRouter'
import { LandingPage } from '../shared/pages/LandingPage'



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='*' element={<BookRouter />} />
      </Routes>
    </>
  )
}
