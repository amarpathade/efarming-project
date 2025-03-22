import { Link } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">🛒 Your Cart</h1>

      {/* 🛑 Check if Cart is Empty */}
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          Your cart is empty.{" "}
          <Link
            to="/product-home"
            className="text-blue-500 hover:underline ml-1"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4">
          {/* ✅ Mapping Cart Items */}
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-3 mb-3"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Checkout Button */}
          <div className="text-center mt-4">
            <Link
              to="/checkout"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
