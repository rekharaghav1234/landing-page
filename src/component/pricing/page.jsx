import React from 'react'
import Questions from '../ques/page';
import Footer from '../footer/page';
import './style.css'
const hanldeClick=()=>{
    window.scrollTo(0, 0); 
}

const Pricing = () => {
  return (
    <div style={{display:"flex" , flexDirection:"column",marginTop:"30px",alignItems:"center",width:"100%"}}className='price'>
                <div>
                    <button style={{backgroundColor:"grey",borderRadius:"10px",width:"130px"}}>Pricing Plan</button></div>
                <div><h1 style={{fontSize:"30px"}}>Choose Your Best Plan</h1></div>
                <div style={{display:"flex" ,gap:"20px",justifyContent:"center"}} className='pricing-cards'>
                <div style={{width:"80%",height:"400px",backgroundColor:"grey"  ,borderRadius:"20px", color:"white" ,textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}} className='box1'>
                    <h4>Basic</h4>
                    <h1 style={{fontSize:"30px"}}>$29.99</h1>
                    <p>Per user, per month</p>
                    <h1>AI-powered chatbot</h1>
                    <hr/>
                    <h1>Up to 500 interactions per month</h1>
                    <hr/>
                    <h1>Email support</h1>
                    <button style={{backgroundColor:"yellow"} } onClick={hanldeClick}>Choose Plan</button>
                </div>
                <div style={{width:"98%",height:"450px",backgroundColor:"black" ,borderRadius:"20px",color:"white",display:"flex",flexDirection:"column",justifyContent:"space-evenly", textAlign:"center"}} className='box2'>
                    <h1>Premium</h1>
                    <h1 style={{fontSize:"40px"}}>$239.99</h1>
                    <p>Per user, per month</p>
                    <h1>AI-powered chatbot</h1>
                    <hr/>
                    <h1>Up to 500 interactions per month</h1>
                    <hr/>
                    <h1>Email support</h1>
                    <h1>24/7 File archive</h1>
                    <button onClick={hanldeClick}>Get started</button>
                </div>
                <div style={{width:"80%",height:"400px",backgroundColor:"grey"  ,borderRadius:"20px", color:"white" ,textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}} className='box1' >
                <h4>Basic</h4>
                    <h1 style={{fontSize:"30px"}}>$29.99</h1>
                    <p>Per user, per month</p>
                    <h1>AI-powered chatbot</h1>
                    <hr/>
                    <h1>Up to 500 interactions per month</h1>
                    <hr/>
                    <h1>Email support</h1>
                    <button style={{backgroundColor:"yellow"}} onClick={hanldeClick}>Choose Plan</button>
                </div>
                </div>
              
               <Questions/>
               <Footer/>
            </div>
  )
}

export default Pricing