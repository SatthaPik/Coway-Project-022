import React from 'react'
import { FaLine ,FaFacebookSquare } from "react-icons/fa";


function Contact() {


    return (
        <div className="justify-center text-center bg-bgcontact bg-cover h-screen">
            <div className=" flex flex-col items-center">
                <a href="https://line.me/R/ti/p/@908grhej">
                <FaLine className="text-9xl"/>
                </a>
            </div>
            <a href="https://line.me/R/ti/p/@908grhej">
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4
                focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700
                dark:focus:ring-green-800">ติดต่อผ่านไลน์</button>
            </a>
            <div className=" flex flex-col items-center">
                <a href="https://www.facebook.com/profile.php?id=100086475185295">
                <FaFacebookSquare className="text-9xl"/>
                </a>
            </div>
            <a href="https://www.facebook.com/profile.php?id=100086475185295">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4
                focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                dark:focus:ring-blue-800">Facebook</button>
            </a>
        </div>
    )
}

export default Contact