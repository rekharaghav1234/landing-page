import React from 'react'
import "./style.css"
const Revolutionize = () => {
    const hanldeClick=()=>{
        window.scrollTo(0, 0); 
    }
  return (
<div  className='revolutionize'>
                <div style={{ marginTop: "60px" ,display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <button style={{ backgroundColor: "grey", height: "30px", borderRadius: "20px", width: "100px"}} onClick={hanldeClick}>Features</button>
                    <h1 style={{ fontSize: "40px",textAlign:"center" }}>Revolutionize Your Workflow</h1> 
                    </div>

                <div style={{  display: "flex", justifyContent: "space-evenly", gap: "20px" }} className='revolutionize2'>
                    <div style={{ display: 'flex' }}>
                        <div style={{ backgroundImage: "url(https://framerusercontent.com/images/JKkpnXDn7obomyyE95VNZpgE6x4.png)", backgroundSize: "cover", width: "355px", height: "330px" }}></div></div>
                    <div>
                        <h1>Personalization</h1>
                        <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Cumque non tenetur ullam.</p>
                        <button style={{ backgroundColor: "yellow",width:"110px",borderRadius:"20px" }} onClick={hanldeClick}>Get started</button>
                        <div style={{ backgroundImage: "url(https://framerusercontent.com/images/jOuCdBAt4HHGItKioroe0EE.png)", backgroundSize: "cover", marginTop: "20px", width: "430px", height: "300px" }}></div>
                    </div>
                </div>
                </div>
  )
}

export default Revolutionize