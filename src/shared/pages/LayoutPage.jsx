import { useState } from "react"
import { BookContext } from "../../books/context/BookContext"
import { CartContext } from "../../books/context/CartContext"
import { getAllBooks } from "../../books/data/getAllBooks"

import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const LayoutPage = ({ children }) => {

    const [books, setBooks] = useState(getAllBooks());
    const [items, setItems] = useState([]);

    return (
        <BookContext.Provider value={{ books, setBooks }}>
            <CartContext.Provider value={{items, setItems}}>
                <Navbar />
                <div className="d-flex flex-column min-vh-100">
                    <div className="flex-grow-1">
                        <div className="container py-3 my-3">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </CartContext.Provider>
        </BookContext.Provider>
    )
}
