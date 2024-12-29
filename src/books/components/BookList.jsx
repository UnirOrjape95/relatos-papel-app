import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { BookCard } from './BookCard'

export const BookList = () => {

    const { books } = useContext(BookContext);


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                books.map(book => (
                    <BookCard
                        key={book.id}
                        {...book}
                    />
                ))
            }
        </div>
    )
}
