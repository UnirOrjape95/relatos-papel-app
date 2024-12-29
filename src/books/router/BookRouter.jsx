import { Route, Routes } from "react-router-dom"

import { BookCatalogPage } from "../pages/BookCatalogPage"
import { BookDetailPage } from "../pages/BookDetailPage"
import { LayoutPage } from "../../shared/pages/LayoutPage"
import { NotFoundPage } from "../../shared/pages/NotFoundPage"
import { CheckoutPage } from "../pages/CheckoutPage"


export const BookRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/books' element={<LayoutPage><BookCatalogPage /></LayoutPage>} />
        <Route path='/books/:bookId' element={<LayoutPage><BookDetailPage /></LayoutPage>} />
        <Route path='/books/chekout' element={<LayoutPage><CheckoutPage /></LayoutPage>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
