"use client";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { FaFacebook } from 'react-icons/fa';

const Sidebar = () => {
   return (
      <div>
         <img
            src='mypic.jpg'
            alt='avatar'
            className='w-32 h-32 mx-auto border rounded-full '
         />
         <h3 className='my-4 text-3xl '>
            <span className='text-green-500 '>Abdullah</span> Saad
         </h3>
         <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500'>
            Web Developer
         </p>
         {/* Resume */}
         <a
            href='/assets/Saad Resume.pdf'
            download='Saad Resume.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'>
            <GiTie className='w-6 h-6' />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full '>
            <a href='https://www.facebook.com/abdullah.saad.92505'>
               <FaFacebook className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.linkedin.com/in/saad-a-0072a92bb/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://github.com/SaadTahir1'>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-4 my-5 bg-gray-200 dark:bg-black-500'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span>Karachi , Pakistan </span>
            </div>
            <p className='my-2 '> abdullahsaadjee23@gmail.com </p>
            <p className='my-2'> 03462007259 / 03430210270 </p>
         </div>

         {/* Email Button */}
         <button
            className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 focus:outline-none'
            onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox?compose=XBcJlDLZchcgQHGhGRRFVRhHlTWwXmDJLPXslJhHvsklXJtNtpXjrmBNkKbHGdswjGwvzPHkNShhkJTG')}>
            Email me
         </button>

         {/* Theme Toggle Button */}
         <button
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Let's have a talk
      </button>
   </div>
   );
}

export default Sidebar;
