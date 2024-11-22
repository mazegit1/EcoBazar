import React, { useState } from "react";
import { RiPlantFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaPinterest, FaFacebookF, FaTwitter, FaInstagram, FaCcApplePay, FaCcVisa, FaCcDiscover, FaApple, FaGooglePlay } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const [showAppModal, setShowAppModal] = useState(false);

  const toggleAppModal = () => setShowAppModal(!showAppModal);

  return (
    <>
      <motion.div
        className="footer z-10  bg-[#f4f4f4] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Footer Top Section */}
        <motion.div
          className="footer-top py-8 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-48"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.6 },
            },
          }}
        >
          <motion.a
            href="/"
            className="left flex items-center gap-4 text-4xl font-semibold "
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <RiPlantFill className="text-green-500" />
            <h1>Ecobazar</h1>
          </motion.a>
          <motion.div
            className="middle text-center lg:text-left mt-6 lg:mt-0"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h1 className="text-xl lg:text-2xl font-semibold text-green-500 ">
              Subscribe to our Newsletter
            </h1>
            <h3 className="text-gray-600 mt-2 ">
              Pellentesque eu nibh eget mauris congue mattis nec tellus. <br /> Phasellus imperdiet elit eu magna.
            </h3>
          </motion.div>
          <motion.div
            className="right flex flex-col lg:flex-row items-center lg:items-start gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <motion.div
              className="subscribe-container flex items-center bg-gray-100 shadow-md rounded-full px-4 py-2 w-full lg:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 text-sm md:text-base"
              />
              <motion.button
                className="bg-green-500 text-white rounded-full px-8 py-4 text-sm font-semibold hover:bg-green-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
            <motion.div
              className="social-icons flex items-center gap-4 mt-4 lg:mt-0"
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.6 }}
            >
              {[{ icon: FaFacebookF, bg: "bg-green-500", color: "text-white" },
                { icon: FaTwitter, bg: "bg-gray-200", color: "text-gray-600" },
                { icon: FaPinterest, bg: "bg-gray-200", color: "text-gray-600" },
                { icon: FaInstagram, bg: "bg-gray-200", color: "text-gray-600" }].map(({ icon: Icon, bg, color }, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`${bg} p-3 rounded-full ${color} hover:bg-green-500 hover:text-white`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom text-white bg-[#333333] py-8">
          <div className="maintop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-48">
            <div className="left text-lg text-white">
              <h1 className="text-green-500 font-semibold text-4xl">About Shopery</h1>
              <h3 className="text-gray-400">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</h3>
              <div className="wrapper flex items-center gap-2 mt-4">
                <h1 className="hover:text-green-500">+994-55-688-15-00</h1>
                <h1 className="text-green-500">or</h1>
                <h1 className="hover:text-green-500">mazegitt@gmail.com</h1>
              </div>
            </div>
            <div className="middle text-white">
              <h1 className="text-xl font-semibold text-green-500 ">My Account</h1>
              <ul>
                <li><a href="/settings" className="hover:text-green-500">My Account</a></li>
                <li><a href="/history" className="hover:text-green-500">Order History</a></li>
                <li><a href="/shop" className="hover:text-green-500">Shopping Cart</a></li>
                <li><a href="/wishlist" className="hover:text-green-500">Wishlist</a></li>
              </ul>
            </div>
            <div className="middle text-white">
              <h1 className="text-xl font-semibold text-green-500 ">Help</h1>
              <ul>
                <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
                <li><a href="/faqs" className="hover:text-green-500">FAQs</a></li>
                <li><a href="/terms" className="hover:text-green-500">Terms & Conditions</a></li>
                <li><a href="/terms" className="hover:text-green-500">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="right">
              <h1 className="text-xl font-semibold text-white hover:text-green-500">Download Mobile App</h1>
              <div className="flex gap-4 mt-4">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="card flex items-center gap-2 cursor-pointer"
                  onClick={toggleAppModal}
                >
                  <FaApple className="text-4xl text-green-500"/>
                  <div className="wrapper flex flex-col">
                    <h1>Download on the</h1>
                    <h1>App Store</h1>
                  </div>
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="card flex items-center gap-2 cursor-pointer"
                  onClick={toggleAppModal}
                >
                  <FaGooglePlay className="text-4xl text-green-500"/>
                  <div className="wrapper flex flex-col">
                    <h1>Download on the</h1>
                    <h1>Google Play</h1>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <hr className="mt-8 border-gray-500" />
          <div className="mainbottom flex justify-between items-center px-6 lg:px-48 py-4">
          <div className="flex gap-6">
      <motion.a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition duration-300"
        whileHover={{ scale: 1.2 }}
      >
        <FaFacebookF size={24} />
      </motion.a>
      
      <motion.a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition duration-300"
        whileHover={{ scale: 1.2 }}
      >
        <FaTwitter size={24} />
      </motion.a>
      
      <motion.a
        href="https://www.pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800 transition duration-300"
        whileHover={{ scale: 1.2 }}
      >
        <FaPinterest size={24} />
      </motion.a>
      
      <motion.a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-800 transition duration-300"
        whileHover={{ scale: 1.2 }}
      >
        <FaInstagram size={24} />
      </motion.a>
      
      <motion.a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 transition duration-300"
        whileHover={{ scale: 1.2 }}
      >
        <SiLinkedin size={24} />
      </motion.a>
      
      <motion.a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-black transition duration-300"
        whileHover={{ scale: 1.2 }}
      >
        <IoLogoGithub size={24} />
      </motion.a>
    </div>
            <div className="middle text-center">
              <h1 className="hover:text-green-500">Shopery eCommerce © 2024. All Rights Reserved</h1>
            </div>
            <div className="right flex items-center text-xl xl:text-7xl md:text-4xl gap-4">
              <FaCcApplePay />
              <FaCcVisa />
              <FaCcDiscover />
            </div>
          </div>
        </div>
      </motion.div>

      {/* App Download Modal */}
      {showAppModal && (
        <div className="app-modal bg-gray-800 bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20">
          <div className="modal-content bg-white p-8 rounded-lg">
            <motion.button onClick={toggleAppModal} className="absolute top-2 right-2 text-red-500 text-xl">X</motion.button>
            <h1 className="text-xl font-semibold text-green-500">App Download</h1>
            <a href="/">Return to Home !</a>
            <p className="mt-4 text-gray-600">Get our mobile app on the App Store or Google Play.</p>
            <div className="mt-4 flex gap-4">
              <motion.div whileTap={{ scale: 0.9 }} className="card flex items-center gap-2">
                <FaApple  className="text-4xl text-green-500"/>
                <div className="wrapper flex flex-col">
                  <h1>Download on the</h1>
                  <h1>App Store</h1>
                </div>
              </motion.div>
              <motion.div whileTap={{ scale: 0.9 }} className="card flex items-center gap-2">
                <FaGooglePlay  className="text-4xl text-green-500"/>
                <div className="wrapper flex flex-col">
                  <h1>Download on the</h1>
                  <h1>Google Play</h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
