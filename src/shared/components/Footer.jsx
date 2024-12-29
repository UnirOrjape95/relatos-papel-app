const currentYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <footer className="py-3">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Políticas de privacidad</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Condiciones</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Código de conducta</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQs</a></li>
                        </ul>
                        <p className="text-center text-light">Todos lo derechos reservados © {currentYear}</p>
                    </footer>
                </div>
            </div>
        </>
    )
}
