import React, { useState } from 'react';
import axios from 'axios';


const OpenAIRequest = () => {
  
  const [response, setResponse] = useState('');
  const REACT_APP_OPENAI_API_KEY= "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" ;


  const generateResponse = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          prompt: 'What is Star?', //need to make it dynamic
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      console.log(response.data.choices[0].text);
      setResponse(response.data.choices[0].text);
      
    } catch (error) {
      console.error(error);
      alert("Something Went Wrong!");
    }
  };

  return (
    <div>
        <br/>         <br/>         <br/>

       < input type='box' style={{margin: "10px auto",width:"700px", padding: "50px", textAlign: "center"}} className='form-control' box placeholder = "Type Something!"/> 
       <br/>
      <button className='btn  btn-outline-primary' onClick={generateResponse}>Generate Response</button>
      

      <p>{response}</p>
    </div>
  );
};

export default OpenAIRequest;
