import React from 'react'
import './style.css'
const Navbar = () => {
  return (
    <div style={{backgroundColor:"black" ,width:"100%",height:"70px",display:"flex",color:"white",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{paddingLeft:"40px"}}><h2>franKie</h2></div>
      <div style={{display:"flex",gap:"20px"}}>
        <div className='home'><h2>Home</h2></div>
       <div> <h2>Features</h2></div>
       <div> <h2>Pricing</h2></div>
       <div> <h2>Blog</h2></div>

        </div> 
        <div style={{paddingRight:"40px"}}>
            <h2 className='templar'>Get the Templar</h2>
            </div> 
    
    </div>
  )
}

export default Navbar