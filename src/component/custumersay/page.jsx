import React from 'react'
import './style.css'
const CustomerSays = () => {
  return (
    <div style={{display:"flex",backgroundColor:"white",justifyContent:"center",alignItems:"center",justifyContent:"space-evenly",gap:"40px",width:"100%"}} className='custumer'>
    <div className='button' style={{width:"450px"}}><button style={{backgroundColor:"grey",borderRadius:"20px",width:"130px"}}>Testimonials</button>
    
    <h1 style={{fontSize:"30px"}}>What Customers Say</h1>
<p style={{padding:"30px"}}>Read what our satisfied customers have to say about our products/services. We take pride in providing exceptional customer service and value their feedback.</p>
    </div>
    <div style={{width:"450px"}} className='button'>
        <p style={{padding:"30px"}}>I recently used an AI chat system and it exceeded my expectations. The speed and accuracy of the responses were impressive, and the personalized recommendations were ad nice touch. I highly recommend it to anyone lookingd to streamline their communication process</p>
         
    </div>
</div>
  )
}

export default CustomerSays