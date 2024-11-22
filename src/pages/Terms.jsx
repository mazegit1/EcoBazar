import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import termsImage from '../images/terms.jpg';

const Terms = () => {
  const [openSection, setOpenSection] = useState(null);

  // Toggle sections
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 px-4 py-80 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${termsImage})` }}
        animate={{ x: ['0%', '100%', '0%'] }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity
        }}
      ></motion.div>

      {/* Header Section */}
      <motion.div 
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Terms & Conditions
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Please read these terms and conditions carefully.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="space-y-8 relative z-10">
        {/* Terms Section 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div
            className="border-b border-gray-200 cursor-pointer py-4"
            onClick={() => toggleSection(1)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-gray-700">1. Introduction</h2>
              {openSection === 1 ? (
                <FiChevronUp className="text-gray-600 text-xl" />
              ) : (
                <FiChevronDown className="text-gray-600 text-xl" />
              )}
            </div>
            {openSection === 1 && (
              <motion.p
                className="mt-4 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                This website is operated by Ecobazar. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Terms Section 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div
            className="border-b border-gray-200 cursor-pointer py-4"
            onClick={() => toggleSection(2)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-gray-700">2. Use of the Site</h2>
              {openSection === 2 ? (
                <FiChevronUp className="text-gray-600 text-xl" />
              ) : (
                <FiChevronDown className="text-gray-600 text-xl" />
              )}
            </div>
            {openSection === 2 && (
              <motion.p
                className="mt-4 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                You agree to use this site in accordance with all applicable local, state, and federal laws. You are responsible for all your actions and activities while using this site.
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Terms Section 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div
            className="border-b border-gray-200 cursor-pointer py-4"
            onClick={() => toggleSection(3)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-gray-700">3. Privacy Policy</h2>
              {openSection === 3 ? (
                <FiChevronUp className="text-gray-600 text-xl" />
              ) : (
                <FiChevronDown className="text-gray-600 text-xl" />
              )}
            </div>
            {openSection === 3 && (
              <motion.p
                className="mt-4 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                We respect your privacy. All data collected is used for providing better services and is handled according to our privacy policy.
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Additional Sections... */}
      </div>

      {/* Footer Section */}
      <motion.div 
        className="text-center mt-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <p className="text-gray-500">
          &copy; 2024 Ecobazar. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Terms;
