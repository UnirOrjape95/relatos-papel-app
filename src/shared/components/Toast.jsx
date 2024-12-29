import { useEffect, useState } from "react";

export const Toast = ({ message, duration = 3000 }) => {

    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    if (!show) return null;

    return (
        <div
            className="toast toast-top-right align-items-center text-bg-primary border-0 show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div className="d-flex">
                <div className="toast-body">{message}</div>
                <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    aria-label="Close"
                    onClick={() => setShow(false)}
                ></button>
            </div>
        </div>
    )
}