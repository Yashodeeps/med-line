import React from 'react'
import Header from './Header';
import UserInput from './UserInput';
import ResultsSection from './ResultsSection';
import ProfileCard from './ProfileCard';
import SymptomeCard from './SymptomeCard';

const Dashboard = () => {
  return (
    <>
    <div><Header/></div>

    <div className='m-4 p-4  '><UserInput/></div>

    <div><ResultsSection/></div>
     
    <div className='flex justify-center'>
    <div className='content-center m-14 p-4 border-solid border-black flex-col justify-center text-lg'>
      <h2>
        - Now, this list of symptomes will be sent to GPT api 
      </h2>
      <h2>
        - And the API will return the info about possible desease and prescribe
      </h2>
      <h2>
        - Following is the demo result:
      </h2>

      <h1 className='text-lg m-2 p-2 font-bold text-green-600' >
        Strongly matched
      </h1>
      <SymptomeCard />

      <h1 className='text-lg m-2 p-2 font-bold text-green-600' >
        Might also be
      </h1>
      <div className='flex'>
      <SymptomeCard />
      <SymptomeCard />
      </div>

      <h1 className=' m-4 text-xl '>TO DO: </h1>
      <div className='flex justify-center '>
    <ul className='list-decimal'>
      <li>Voice Input</li>
      <li>MultiLingual support</li>
      <li>Chatbot</li>
      <li>Storing medical History: Building Profile Component</li>
      <li>Implimenting scheduling feature for doctor appoinment</li>
    </ul>
    </div>
    </div>
    </div>

    
    
    

    </>
  )
}

export default Dashboard;