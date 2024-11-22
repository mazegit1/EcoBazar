import React from "react";
import heroimg from "../images/home-main-image.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { BsShop } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import ProjectsHero from "../components/ProjectsHero";
const Home = () => {
  return (
   <>
    <div className="home px-6 lg:px-20 xl:px-56 pt-56">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Left Image */}
        <motion.div
          className="home-left"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={heroimg}
            alt="hero main image"
            className="w-full max-w-md lg:max-w-lg xl:max-w-5xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="home-right text-center lg:text-left"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="subtitle text-[#00B207] text-xl lg:text-2xl mb-2">
            Welcome to Shopery
          </h3>
          <h1 className="title text-3xl lg:text-6xl font-bold leading-tight mb-4">
            Fresh & Healthy <br />
            Organic Food
          </h1>
          <h3 className="text-gray-600 text-lg lg:text-xl mb-6">
            Free shipping on all your orders. We deliver, you enjoy.
          </h3>
          <a
            href="/shop"
            className="shop-link flex items-center justify-center lg:justify-start gap-4 text-white bg-[#00B207] w-fit px-8 lg:px-12 text-lg lg:text-2xl hover:bg-[#009405] transition-all ease-in-out duration-300 active:bg-white active:text-black py-3 lg:py-4 rounded-3xl"
          >
            Shop now <FaArrowRightLong />
          </a>
        </motion.div>
      </div>

      {/* Scroll-triggered Section */}
      <motion.div
        className="scroll-info mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">
          Why Choose Shopery?
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
          Shopery provides fresh, organic, and healthy food right to your
          doorstep. Experience top-notch customer service, eco-friendly
          packaging, and a variety of products sourced from local farmers.
        </p>
      </motion.div>
    </div>
    <div className="services  flex items-center justify-center mx-auto shadow-xl my-20 w-fit">
      <div className="service w-fit pl-12 pr-28 rounded-l-md py-6 hover:bg-white hover:text-black bg-[#00B207] text-white transition-all ease-in-out duration-200 ">
        <BsShop className="p-2 bg-white border text-8xl rounded-full border-gray-400 text-[#00B207]"/>
        <h1 className="text-3xl pt-2 font-semibold">Free Shipping</h1>
        <h3 className="pt-4 text-gray-300">Free shipping with discount</h3>
      </div>
      <div className="service w-fit pl-12 pr-28 rounded-l-md py-6 bg-white text-black hover:bg-[#00B207] hover:text-white transition-all ease-in-out duration-200 ">
        <TfiHeadphoneAlt className="p-2 bg-white border text-8xl rounded-full border-gray-400 text-[#00B207]"/>
        <h1 className="text-3xl pt-2 font-semibold">Great Support 24/7</h1>
        <h3 className="pt-4 text-gray-300">Instant access to Contact</h3>
      </div>
      <div className="service w-fit pl-12 pr-28 rounded-l-md py-6 bg-white text-black hover:bg-[#00B207] hover:text-white transition-all ease-in-out duration-200 ">
        <RiSecurePaymentFill className="p-2 bg-white border text-8xl rounded-full border-gray-400 text-[#00B207]"/>
        <h1 className="text-3xl pt-2 font-semibold">100% Sucure Payment</h1>
        <h3 className="pt-4 text-gray-300">We ensure your money is save</h3>
      </div>
      <div className="service w-fit pl-12 pr-28 rounded-l-md py-6 bg-white text-black hover:bg-[#00B207] hover:text-white transition-all ease-in-out duration-200 ">
        <BsBoxSeam className="p-2 bg-white border text-8xl rounded-full border-gray-400 text-[#00B207]"/>
        <h1 className="text-3xl pt-2 font-semibold">Money-Back Guarantee</h1>
        <h3 className="pt-4 text-gray-300">30 days money-back guarantee</h3>
      </div>
    </div>
    <ProjectsHero/> 
    

   </>
  );
};

export default Home;
