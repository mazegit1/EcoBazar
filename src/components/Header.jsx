import React, { useState } from "react";
import { FaLocationDot, FaRegHeart, FaPhone } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FaStore, FaQuestionCircle, FaBlog, FaInfoCircle } from "react-icons/fa"; // Additional icons for new links
import { MdOutlineTerminal } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Define the links and their corresponding icons
  const navLinks = [
    { name: "Shop", icon: <FaStore /> },
    { name: "Terms", icon: <MdOutlineTerminal /> }, // You can update this with a relevant icon
    { name: "FAQs", icon: <FaQuestionCircle /> },
    { name: "Blog", icon: <FaBlog /> },
    { name: "About", icon: <FaInfoCircle /> },
    { name: "Contact", icon: <FaPhone /> },
  ];

  return (
    <>
      <div className="header shadow-xl bg-transparent backdrop-blur-xl z-10 fixed w-full ">
        {/* Header Top */}
        <motion.div
          className="header-top flex items-center justify-between bg-[#333333] py-3 px-4 lg:px-48 text-sm lg:text-lg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="left flex items-center gap-2 text-xs md:text-sm">
            <FaLocationDot />
            <h1>Store Location: Lincoln-344, Illinois, Chicago, USA</h1>
          </div>
          <div className="right flex items-center gap-4 text-xs md:text-sm">
            <a href="/sign-in" className="hover:underline">
              Sign In
            </a>
            <h1>/</h1>
            <a href="/sign-up" className="hover:underline">
              Sign Up
            </a>
          </div>
        </motion.div>

        {/* Header Middle */}
        <div className="header-middle flex flex-col lg:flex-row items-center justify-between px-4 lg:px-48 py-4 gap-4">
          {/* Logo */}
          <motion.a
            href="/"
            className="left flex text-3xl md:text-4xl lg:text-5xl font-semibold items-center gap-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <RiPlantFill className="text-[#00B207]" />
            <h1>Ecobazar</h1>
          </motion.a>

          {/* Search Bar */}
          <motion.div
            className="middle shadow-md items-center border border-gray-300 rounded-lg overflow-hidden w-full lg:w-1/2 flex"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-3 text-gray-500">
              <BiSearch size={20} />
            </div>
            <motion.input
              type="text"
              placeholder="Search for products"
              className="flex-grow py-2 px-3 text-sm md:text-base outline-none text-gray-700"
              whileFocus={{
                scale: 1.03,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              className="bg-green-500 text-white font-bold py-3 px-4 rounded-md text-sm"
              whileHover={{ backgroundColor: "#00a000" }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </motion.div>

          {/* Icons */}
          <motion.div
            className="right flex items-center gap-4 lg:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <FaRegHeart className="text-lg md:text-2xl" />
            <div className="line w-1 h-8 bg-gray-200 rounded-xl"></div>
            <div className="flex items-center gap-2 md:gap-4">
              <LiaShoppingBagSolid className="text-xl md:text-2xl" />
              <span className="the-number-of-products">0</span>
              <div className="flex flex-col items-start gap-1 text-xs md:text-sm">
                <h1>Shopping cart</h1>
                <h1 className="font-semibold">$ 0.00</h1>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Header Bottom */}
        <motion.div
          className="header-bottom flex items-center justify-between px-4 lg:px-48 bg-gray-100 py-3 relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hamburger Menu */}
          <button className="lg:hidden text-2xl bg-transparent backdrop-blur-xl" onClick={toggleMenu}>
            {menuOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } lg:flex bg-gray-200 backdrop-blur-2xl flex-col lg:flex-row absolute lg:relative top-12 lg:top-0 left-0 w-full  lg:bg-transparent py-4 lg:py-0 items-center gap-4 lg:gap-8 text-sm lg:text-lg`}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={`/${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-green-500 transition-all ease-in-out duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Contact */}
          <div className="hidden lg:flex items-center gap-2 w-56 text-sm lg:text-lg">
            <FaPhone />
            <a href="tel:+994556881500" className="hover:underline">
              055-688-15-00
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
