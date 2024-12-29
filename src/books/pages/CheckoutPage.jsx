import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../shared/components/Toast";
import { useLoading } from "../../shared/hooks/useLoading";

export const CheckoutPage = () => {
  const { items, setItems } = useContext(CartContext);
  const [itemsWithQuantity, setItemsWithQuantity] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [messageToast, setMessageToast] = useState("");
  const { loading, showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      navigate("/books");
    } else {
      setItemsWithQuantity(
        items.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }))
      );
    }
  }, [items, navigate]);

  const handleQuantityChange = (id, quantity) => {
    setItemsWithQuantity((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const total = itemsWithQuantity.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePay = () => {
    showLoading();
    setMessageToast("Compra completada exitosamente");
    setShowToast(true);
    setTimeout(() => {
      hideLoading();
      setItems([]);
    }, 1000);
  }


  if (items.length === 0) {
    return null;
  }

  return (

    <div className="container py-4">
      <h1 className="mb-4 text-primary text-left">Carrito</h1>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <>
          <ul className="list-group">
            {itemsWithQuantity.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >

                <span className="fw-bold">{item.title}</span>

                <input
                  type="number"
                  className="form-control w-auto"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
                <span>${item.price}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-end">
            <h4>Total: ${total.toFixed(2)}</h4>
          </div>

          <hr />
          <button onClick={handlePay} className="btn btn-dark fw-semibold rounded-pill px-4 py-2 ms-auto d-block">
            Pagar
          </button>
        </>)}
      {showToast && <Toast message={messageToast} />}
    </div>

  )
}
