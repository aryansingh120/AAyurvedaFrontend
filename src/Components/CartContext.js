import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// ✅ Context Create Kiya
const CartContext = createContext();

// ✅ Provider Function
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null); // ✅ NEW STATE
  const token = localStorage.getItem("authToken");
  const [userName,setUserName]=useState("login")
  const [cartNum,setCartNum]=useState(0)
  const increaseCart = () => {
    setCartNum(prev => prev + 1);
  };
  const decreaseCart = () => {
    setCartNum(prev => (prev > 0 ? prev - 1 : 0));
  };
  // 🛒 Fetch Cart Items from Backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("https://aayurveda-hn8w.onrender.com/cart/allCart", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCart(response.data.allCarts);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (token) {
      fetchCartItems();
    }
  }, [token]);

  // ✅ Increase Quantity
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId._id === productId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  // ✅ Decrease Quantity
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ✅ Remove Item from Cart
  const removeItem = async (productId) => {
    try {
      await axios.post(
        "https://aayurveda-hn8w.onrender.com/cart/deleteCart",
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCart((prevCart) => prevCart.filter((item) => item.productId._id !== productId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      selectedProductId, 
      userName,
      cartNum,
      setUserName,
      increaseCart,
      decreaseCart,
      setSelectedProductId,  // ✅ NEW FUNCTION
      increaseQuantity, 
      decreaseQuantity, 
      removeItem 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom Hook for using CartContext
export const useCart = () => useContext(CartContext);
