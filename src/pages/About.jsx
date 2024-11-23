import React from 'react';
import section1 from '../images/section1.png';
import section2 from '../images/section2.png';
import section3 from '../images/section3.png';
import { PiPlantThin } from 'react-icons/pi';
import { GiFallingStar } from 'react-icons/gi';
import { FaShippingFast } from 'react-icons/fa';
import { ImHeadphones } from 'react-icons/im';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { GiMeal } from 'react-icons/gi';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <div className="about py-56 px-20">
        {/* Section 1 */}
        <motion.div 
          className="section flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <div className="left w-full md:w-1/2">
            <h1 className="text-4xl font-bold">100% Trusted <br />Organic Food Store</h1>
            <h3 className="text-lg md:text-xl mt-4">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            </h3>
          </div>
          <div className="right w-full md:w-1/2 mt-8 md:mt-0">
            <motion.img
              src={section1}
              alt="section1"
              className="w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="section flex flex-col-reverse md:flex-row items-center justify-between mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="left w-full md:w-1/2">
            <motion.img
              src={section2}
              alt="section2"
              className="w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="right w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold">100% Trusted <br />Organic Food Store</h1>
            <h3 className="text-lg md:text-xl mt-4">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
            </h3>

            <div className="infos grid zl:grid-cols-2 grid-cols-1 gap-6 my-8">
              {[
                { icon: <PiPlantThin className="text-9xl text-[#00B207] bg-[#00B207]/30 p-2 rounded-full border border-[#00B207]" />, title: '100% Organic food', description: '100% healthy & Fresh food.' },
                { icon: <GiFallingStar className="text-9xl text-[#00B207] bg-[#00B207]/30 p-2 rounded-full border border-[#00B207]" />, title: 'Customer Feedback', description: 'Our happy customer' },
                { icon: <FaShippingFast className="text-9xl text-[#00B207] bg-[#00B207]/30 p-2 rounded-full border border-[#00B207]" />, title: 'Free Shipping', description: 'Free shipping with discount' },
                { icon: <ImHeadphones className="text-9xl text-[#00B207] bg-[#00B207]/30 p-2 rounded-full border border-[#00B207]" />, title: 'Great Support 24/7', description: 'Instant access to Contact' },
                { icon: <RiSecurePaymentLine className="text-9xl text-[#00B207] bg-[#00B207]/30 p-2 rounded-full border border-[#00B207]" />, title: '100% Secure Payment', description: 'We ensure your money is safe' },
                { icon: <GiMeal className="text-9xl text-[#00B207] bg-[#00B207]/30 p-2 rounded-full border border-[#00B207]" />, title: '100% Organic Food', description: '100% healthy & Fresh food.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="info flex items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {item.icon}
                  <div className="wrapper flex flex-col gap-1">
                    <h1 className="text-2xl md:text-3xl font-semibold">{item.title}</h1>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="section flex flex-col md:flex-row items-center justify-between mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="left w-full md:w-1/2">
            <h1 className="text-4xl font-bold">We Delivered, You <br /> Enjoy Your Order.</h1>
            <h3 className="text-lg md:text-xl mt-4">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam.
            </h3>
            <div className="wrapper flex items-center gap-2 mt-4">
              <VscWorkspaceTrusted />
              <h1 className="text-lg">Sed in metus pellentesque.</h1>
            </div>
            <div className="wrapper flex items-center gap-2 mt-4">
              <VscWorkspaceTrusted />
              <h1 className="text-lg">Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</h1>
            </div>
            <div className="wrapper flex items-center gap-2 mt-4">
              <VscWorkspaceTrusted />
              <h1 className="text-lg">Maecenas ut nunc fringilla erat varius.</h1>
            </div>
            <motion.a
              href="/shop"
              className="flex transition-all ease-in-out duration-300 items-center gap-2 xl:px-12 xl:py-4 md:py-2 md:px-10 px-6 py-1 bg-[#00B207] text-white text-3xl rounded-3xl hover:bg-[#008604] shadow-md w-fit mt-8"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Shop Now <IoIosArrowRoundForward className="text-6xl" />
            </motion.a>
          </div>
          <div className="right w-full md:w-1/2 mt-8 md:mt-0">
            <motion.img
              src={section3}
              alt="section3"
              className="w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
