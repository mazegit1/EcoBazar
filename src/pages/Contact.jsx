import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Importing the icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Save form data when submitted
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center py-16 pt-80 bg-gray-100">
      <motion.div
        className="bg-white shadow-xl rounded-lg w-full max-w-lg p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Just Say Hello!</h2>
          <p className="text-gray-600 text-center mt-2">
            Do you fancy saying hi to me or want to get started with your project and need my help? Feel free to contact me.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name Field */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="name" className="text-sm text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Write Your Name:'
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-green-500"
                required
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter the Email:'
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-green-500"
                required
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="subject" className="text-sm text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder='Enter the Subject:'
                value={formData.subject}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-green-500"
                required
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="message" className="text-sm text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="border-2 border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:border-green-500"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg mt-6 hover:bg-green-600 transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Display Submitted Data with Animation */}
      {submittedData && (
        <motion.div
          className="mt-10 w-full max-w-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Your Submitted Information</h3>
          <div className="mt-6 space-y-4">
            <motion.div
              className="flex justify-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <FaMapMarkerAlt className="text-green-500 text-xl" />
              <span className="text-gray-700">Location: {submittedData.name}</span>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              <FaEnvelope className="text-green-500 text-xl" />
              <span className="text-gray-700">Email: {submittedData.email}</span>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
            >
              <span className="text-gray-700">Subject: {submittedData.subject}</span>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
            >
              <span className="text-gray-700">Message: {submittedData.message}</span>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Contact Information Section */}
      <motion.div
        className="mt-10 w-full max-w-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
        <div className="mt-6 space-y-4">
          {/* Location */}
          <motion.div
            className="flex items-center justify-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <FaMapMarkerAlt className="text-green-500 text-xl" />
            <span className="text-gray-700">Baku, Azerbaijan</span>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center justify-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <FaEnvelope className="text-green-500 text-xl" />
            <span className="text-gray-700">mazegitt@gmail.com</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
