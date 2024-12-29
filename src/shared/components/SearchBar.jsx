import { useContext, useState } from "react"
import { BookContext } from "../../books/context/BookContext";
import { getBooksByTitle } from "../../books/data/getBooksByTitle";

export const SearchBar = () => {

  const { setBooks } = useContext(BookContext);

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setBooks(getBooksByTitle(inputValue));
  }

  return (
    <form onSubmit={onSubmit}
      className="py-2 flex-grow-1 d-flex justify-content-center">
      <div className="input-group w-75">
        <span className="input-group-text bg-white border-end-0">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar libro"
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
    </form>
  )
}
