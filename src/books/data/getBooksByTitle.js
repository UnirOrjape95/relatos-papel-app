import { books } from './books.js';

export const getBooksByTitle = (title = '') => {

    title = title.toLocaleLowerCase().trim();

    return books.filter(
        book => book.title.toLocaleLowerCase().includes(title)
    );

}