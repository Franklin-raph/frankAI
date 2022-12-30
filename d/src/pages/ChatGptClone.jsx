import { useState } from "react"
import 'boxicons'
import { PaperPlaneRight, User, Robot } from "phosphor-react";
import ChatContainer from "../components/ChatContainer";

const ChatGptClone = () => {
    const [prompt, setPrompt] = useState("");
    const [aiAnswer, setAiAnswer] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [chatPrompt, setChatPrompt] = useState("");

    let [loading, setLoading] = useState("")

    const sendChatAIQuestion = async () => {
        setLoading("")
        loading = setInterval(() => {
            setLoading += "."

            if(loading === "..."){
                setLoading = ('')
            }
        }, 300)

        const detail = { prompt }
        setChatPrompt(prompt)
        const response = await fetch('http://localhost:8000/openai/chatGptClone', {
            method: "POST",
            body: JSON.stringify(detail),
            headers: {
                'Content-Type':'application/json',
            }
        })
        const { data } = await response.json()
        console.log(data)

        if(!response.ok){
            setErrorMessage(data)
        }else{
            setAiAnswer(data)
            console.log(aiAnswer)
        }
    }

  return (
    <div>
        <ChatContainer chatPrompt={chatPrompt} aiAnswer={aiAnswer}/>
        <h1>
            {loading}
        </h1>
        <div className="chatTextAndBtn">
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ask my AI"></textarea>
            <button onClick={sendChatAIQuestion}>
                <PaperPlaneRight size={32} />
            </button>
        </div>
    </div>
  )
}

export default ChatGptClone