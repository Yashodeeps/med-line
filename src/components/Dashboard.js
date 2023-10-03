import React from 'react'
import Header from './Header';

const Dashboard = () => {
  return (
    <>
    <div className='flex'><Header/></div>
    
    <div className='content-center m-14 p-4 border-solid border-black'>
      <h1 className='m-4 p-4  text-3xl font-bold'>Dashboard Under CONSTRUCTION!!!</h1>
      <h2 className='mx-4 p-2 text-2xl font-bold'>- Froentend Architecture:</h2>
      <h2 className='mx-12 px-4 text-xl font-bold'>- Basic Features:</h2>

      <ul className='mx-28 p-2 list-disc'>
        <li>Search Section: Voice and text </li>
        <li>Cards of some common deseases</li>
        <li>User Profile</li>
        <li>Logut</li>
        <li>Medical History</li>
      </ul>

      <h2 className='mx-12 px-4 text-xl font-bold'>- Additional Features:</h2>
      <ul className='mx-28 p-2 list-disc'>
        <li>AI Chatbot</li>
        <li>Multilingual Suppport</li>
        <li>Contact nearest Hospital </li>
        <li>Book online consultation meeting</li>

      </ul>

    </div>
    </>
  )
}

export default Dashboard;