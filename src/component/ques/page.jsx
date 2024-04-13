'use client'
import { useState } from 'react'
import './style.css'
const Questions = () => {
    const [ans, setAns] = useState(false)
    const [ans2, setAns2] = useState(false)
    const [ans3, setAns3] = useState(false)
    const [ans4, setAns4] = useState(false)
    const handleQesClick = () => {
        if (ans == true) {
            setAns(false)
        } else {
            setAns(true)
        }
    }

    const handleQesClick2 = () => {
        if (ans2 == true) {
            setAns2(false)
        } else {
            setAns2(true)
        }
    }
    const handleQesClick3 = () => {
        if (ans3 == true) {
            setAns3(false)
        } else {
            setAns3(true)
        }
    }
    const handleQesClick4 = () => {
        if (ans4 == true) {
            setAns4(false)
        } else {
            setAns4(true)
        }
    }

    return (
        <div style={{ height: "600px", fontWeight: "bold", display: "flex", flexDirection: "column", gap: "20px", textAlign: "center", marginBottom: "60px" }}>
            <hr />
            <h1 style={{ marginTop: "30px" }} className="hed">Frequently Asked Questions</h1>
            <div style={{ textAlign: "center" }} >

                <button onClick={handleQesClick}>What is an AI chat app?</button>
                {ans && <p style={{ color: "grey", textAlign: "center", padding: "10px" }}>An AI chat app works by using natural language processing algorithms to understand user input, generate appropriate responses, and engage in conversation with the user. The app uses machin learning algorithms to continually improve its performance.</p>}
            </div>

            <hr />
            <div style={{ textAlign: "center" }}>
                <button onClick={handleQesClick2}>What are the benefits of using an AI chat app?</button>
                {ans2 && <p style={{ color: "grey", padding: "10px" }}>AI chat apps can provide numerous benefits, including improved customer service, increased efficiency, and reduced costs. They can also provide 24/7 availability and personalized interactions with users.</p>}
            </div>
            <hr />
            <div style={{ textAlign: "center" }}>
                <button onClick={handleQesClick3} >Can I customize my AI chat app?</button>
                {ans3 && <p style={{ color: "grey", padding: "10px" }}>Many AI chat apps offer customization options, allowing you to tailor the chatbot&apos;s responses to your specific business needs and brand voice.</p>}
            </div>
            <hr />
            <div style={{ textAlign: "center" }}>
                <button onClick={handleQesClick4}>What are the benefits of using an AI chat app?</button>
                {ans4 && <p style={{ color: "grey", padding: "10px" }}>AI chat apps can provide numerous benefits, including improved customer service, increased efficiency, and reduced costs. They can also provide 24/7 availability and personalized interactions with users.</p>}
            </div>
            <hr />
        </div>
    )
}

export default Questions