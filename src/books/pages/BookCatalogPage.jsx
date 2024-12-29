import { SearchBar } from '../../shared/components/SearchBar';
import { BookList } from '../components/bookList';

export const BookCatalogPage = () => {
  return (
    <>
      <SearchBar />
      <h1 className="text-primary py-3">Catálogo de libros</h1>
      <BookList />
    </>

  )
}
