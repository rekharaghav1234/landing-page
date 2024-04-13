import React from 'react'
import './style.css'
const Footer = () => {
    const hanldeClick=()=>{
        window.scrollTo(0, 0); 
    }
  return (
    <div style={{textAlign:"center",height:"800px",backgroundColor:"black",width:"100%",color:"white",display:"flex",justifyContent:"space-evenly",flexDirection:"column",display:"flex",justifyContent:"space-evenly"}} className='footer'>
    <div  className='outer'>
     <div className='heading'><h1 style={{fontSize:"60px"}} >The Future is Now,<br/> Old Man.</h1> 
     <p>Frankie is an AI-powered chatbot app that allows users<br/> to have conversations with a virtual assistant.</p>
     
     </div>
     <div className='footerbutton'>
      <button style={{backgroundColor:"yellow",marginTop:"30px",height:"40px",width:"200px",borderRadius:"20px",color:"black"}} onClick={hanldeClick}>Download for mac</button>
      </div></div>
     <div style={{display:"flex",justifyContent:"space-evenly",gap:"30px"}} className='footerbox'>
      <div><h1>Franklie</h1></div>
     <div>
      <h1 style={{color:"red"}}>company</h1>
      <h1>About</h1>
      <h1>Careers</h1>
     </div>
     <div>
     <h1 style={{color:"red"}}>Help</h1>
     <h1>FAQs</h1>
     <h1>Contact Support</h1>
     </div><div>
      <h1 style={{color:"red"}}>Access</h1>
      <h1>Login</h1>
      <h1>Request Demo</h1>
    </div>
     </div>
</div>
  )
}

export default Footer