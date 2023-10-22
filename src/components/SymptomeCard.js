import React from 'react'

const card = [{
    Symptome: "Headache",
    Sevarity: "Low",
    Causes: ["Lack of Sleep","stress","Loud noice exposure"],
    Description: "A painful sensation in any part of the head, ranging from sharp to dull, that may occur with other symptoms."
},
]

const SymptomeCard = () => {
  return (
    <div className='flex flex-wrap'>
        {card.map(({Symptome, img, Sevarity, Causes, Description}, index) => (
            <div key={index} className='flex-col  m-4 p-4 bg-blue-50 w-56'>

                <h1 className='py-2 text-3xl font-bold'>{Symptome}</h1>
                <h2 className='py-1 text-2xl text-red-800 '>Sevarity: {Sevarity}</h2>
                <h3  className='text-xl'>Causes:</h3>
                <ul className='list-disc px-4 mx-4'>
                    {Causes.map((cause, index)=> <li key={index}>{cause}</li>)}
                </ul>
        
                <h4 className='text-xl py-1'>Description: </h4>
                <p className='text-sm'>{Description}</p>

       
            </div>

    
    ))}

    </div> 
    
  )
}

export default SymptomeCard;