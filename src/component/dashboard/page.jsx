'use client'
// import Container from 'postcss/lib/container';
// import Container from 'postcss/lib/container';
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Footer from '../footer/page';
// import Questions from '../ques/page';
import Pricing from '../pricing/page';
import './style.css'
import Revolutionize from '../revolutionize/page';
import CustomerSays from '../custumersay/page';
import MreAccurate from '../moreaccurateresponse/page';

const Dashboard = () => {
    return (
        <div className='dashboard' style={{width:"100%"}}>
            <div style={{ backgroundColor: "black", height: "800px" }}>
                <div style={{
                    backgroundImage: "url(https://framerusercontent.com/images/Jh7UsQzSHpGxgx7uqOHtxvCvlqI.png)",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    flexDirection: "column",
                    display: "flex",
                    height: "800px"
                }} className='image'>
                    <div style={{
                        display: "flex", margin: "60px",
                        flexDirection: "column", justifyContent: "space-around"
                    }}>
                        <div style={{}}>
                            <button style={{ backgroundColor: "grey", color: "black", borderRadius: "5px", padding: "10px 20px", fontSize: "16px", border: "none" }}>Unique Technology</button>
                        </div>
                        <h1 style={{ fontSize: "50px", textAlign: "center" }}>Unleash the power of AI</h1>
                        <p className='pera'>Frankies is an AI-powered chatbot app that allows users to have<br /> conversations with a virtual assistant</p>
                        <div style={{ marginTop: "20px" }} className='outer'>
                            <input style={{ padding: "10px", fontSize: "16px", marginRight: "20px", borderRadius: "5px", border: "1px solid white" }} placeholder="Enter your email" />
                            <button style={{ backgroundColor: "yellow", width: "130px", color: "black", borderRadius: "5px", padding: "10px ", fontSize: "16px", border: "none" }}>Get Notified</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "white", width: "100%", height: "100%", borderRadius: "40px 40px 00px 0px", display: "flex", flexDirection: "column", justifyContent: "center" }} className='features'>
                <Revolutionize />
                <MreAccurate />
                <CustomerSays />
                <Pricing />
            </div>
        </div>
    );
};

export default Dashboard;
