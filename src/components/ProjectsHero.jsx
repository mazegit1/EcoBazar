import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import project7 from "../images/project7.png";
import project8 from "../images/project8.png";

const ProjectsHero = () => {
  const allProducts = [
    { id: 1, name: "Eggplant", price: "$14.99", img: project1, discount: "50%" },
    { id: 2, name: "Green Lettuce", price: "$14.99", img: project2 },
    { id: 3, name: "Red Tomatoes", price: "$14.99", img: project3, discount: "15%" },
    { id: 4, name: "Green Chilli", price: "$14.99", img: project4 },
    { id: 5, name: "Green Lettuce", price: "$14.99", img: project5, discount: "25%" },
    { id: 6, name: "Eggplant", price: "$14.99", img: project6 },
    { id: 7, name: "Green Apple", price: "$14.99", img: project7, discount: "10%" },
    { id: 8, name: "Surjapur Mango", price: "$14.99", img: project8, discount: "50%" },
    { id: 9, name: "Carrot", price: "$12.99", img: project1 },
    { id: 10, name: "Banana", price: "$10.99", img: project2, discount: "30%" },
    { id: 11, name: "Cucumber", price: "$8.99", img: project3 },
    { id: 12, name: "Pineapple", price: "$15.99", img: project4 },
    { id: 13, name: "Tomato", price: "$13.99", img: project5 },
    { id: 14, name: "Onion", price: "$6.99", img: project6, discount: "90%" },
    { id: 15, name: "Spinach", price: "$9.99", img: project7, discount: "50%" },
    { id: 16, name: "Avocado", price: "$18.99", img: project8, discount: "40%" },
  ];

  const [products, setProducts] = useState(allProducts.slice(0, 8));
  const [showAll, setShowAll] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [likedProducts, setLikedProducts] = useState(new Set());

  // View All / View Less Logic
  const handleViewAll = () => {
    setProducts(allProducts);
    setShowAll(true);
  };

  const handleViewLess = () => {
    setProducts(allProducts.slice(0, 8));
    setShowAll(false);
  };

  // Liked Logic
  const handleLike = (productId) => {
    setLikedProducts((prevLikes) => {
      const newLikes = new Set(prevLikes);
      if (newLikes.has(productId)) {
        newLikes.delete(productId); // Remove from liked
      } else {
        newLikes.add(productId); // Add to liked
      }
      return newLikes;
    });
  };

  // Cart Logic
  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart when an item is added
  };

  const increaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="projects px-6 md:px-20 py-20 bg-[#EDF2EE]">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl pb-6 font-semibold text-gray-900">
          Discover Our Products
        </h1>
      </motion.div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  Sale {product.discount}
                </span>
              )}
              <div className="absolute top-2 right-2 flex space-x-2">
                <AiFillHeart
                  className={`cursor-pointer text-xl ${likedProducts.has(product.id) ? 'text-red-500' : 'text-gray-200'}`}
                  onClick={() => handleLike(product.id)}
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <div className="flex items-center justify-between mt-2">
                <p className="text-green-600 font-bold">{product.price}</p>
                <AiOutlineShoppingCart
                  className="text-green-600 hover:text-green-800 cursor-pointer text-2xl"
                  onClick={() => handleAddToCart(product)}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Popup */}
      {isCartOpen && (
        <motion.div
          className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 p-4"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.5 }}
            >
              <AiOutlineClose
                size={25}
                className="cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              />
            </motion.div>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg">{item.name}</h3>
                    <p className="text-sm">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-green-500 text-white rounded-full">+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-red-500 text-white rounded-full">-</button>
                </div>
                <AiOutlineClose
                  className="cursor-pointer text-red-500"
                  size={20}
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))
          )}
          <div className="flex justify-between mt-6 font-bold">
            <p>Total:</p>
            <p>${calculateTotal()}</p>
          </div>
        </motion.div>
      )}

      {/* View All / View Less Button */}
      <div className="text-center mt-8">
        <button
          onClick={showAll ? handleViewLess : handleViewAll}
          className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-green-600 transition"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default ProjectsHero;
