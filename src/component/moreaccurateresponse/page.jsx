import React from 'react'
import './style.css'
const MreAccurate = () => {
    const hanldeClick=()=>{
        window.scrollTo(0, 0); 
    }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px",backgroundColor:"white",flexDirection:"column",height:"600px",textAlign:"center",width:"100%",justifyContent:"space-evenly"}} className='outer'>
   <div style={{backgroundImage:"url(https://framerusercontent.com/images/gDzwjZgkvwBwpHfv88488abPfBg.png)",padding:"10px",backgroundSize:"cover",border:"none"}} className='img'></div>
<div style={{}}>
 <h1 style={{fontSize:"30px",textAlign:"center"}}>More Accurate Responses</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus<br/> perspiciatis id hic aut! Asperiores.</p> </div>
<div style={{}}>
 <button style={{backgroundColor:"yellow",borderRadius:"20px",width:"140px",height:"40px"}} onClick={hanldeClick}>Get started</button></div>
</div>
  )
}

export default MreAccurate