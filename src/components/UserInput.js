import React, { useRef, useState } from 'react'
import openai from '../utils/openai';


const UserInput = () => {
  const searchText = useRef(null)
  const [symptom, setSymptom]= useState([]);



  const handleAdd =()=> {
    const newSymptom = searchText.current.value;
    //checks if the item addes is not an empty space
    if(newSymptom.trim() !== "") {
      const symptomList = [...symptom, newSymptom]
      setSymptom(symptomList)
    }

    //Clearing the inpiut field after adding
    searchText.current.value = "";
    
  }

  const handleRemove= (index)=>{

    const updatedSymptoms = symptom.filter((_, i) => i !== index);
    setSymptom(updatedSymptoms);

  }

  const handleGptSearch = async()=>{

    const gptQuery = `Given the following symptoms: ${symptom.join(", ")}, identify the disease, provide 1 best match, two more possible matches, and include the following information:
    1. Severity (low/medium/high)
    2. Causes: 3-4 bullet points
    3. Short description
    4. Prescription suggestions.`;

    //calling the API to get results
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResult.choices);  
      }



  return (
    <div className='flex justify-center'>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-blue-100 rounded-lg grid grid-cols-12 w-1/2' >
            <input 
                ref={searchText}
                type="text"
                placeholder="Enter your symptoms :)" 
                className=' p-4 m-4 col-span-6 rounded-lg'
            />

            <button onClick={handleAdd} className='col-span-3 m-4 py-2 px-8  bg-blue-900 text-white rounded-lg'>Add+</button>
            <button onClick={handleGptSearch} className='col-span-3 m-4 py-2 px-8  bg-blue-900 text-white rounded-lg'>Search</button>


            <ul>
              {
                symptom.map((item, index)=>(
                  <li className='flex  ' key={index}>
                    <div className='px-2 py-1 mx-4 my-2 bg-white text-lg flex rounded-md'>
                      {item}
                      <button className=' px-2 text-red-500 hover:font-bold' onClick={()=> handleRemove(index)}> X</button>

                    </div>
                    </li>
                ))
              }
            </ul>

        </form>

    </div>
  )
}

export default UserInput;
