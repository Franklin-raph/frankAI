import 'boxicons'

const ChatContainer = ({chatPrompt, aiAnswer}) => {
  return (
    <div>
        <div className="chat-log">
            <div className="chat-message">
                <div className="human-avatar">
                    <box-icon name='user' size="sm" color="white" flip='horizontal' ></box-icon>
                </div>
                <p className="message">{chatPrompt}"Who won the world cup"</p>
            </div>
        </div>
        <div className="botAnswer">
            <div className="bot">
                <box-icon name='bot' size="sm" color="white" flip='horizontal' ></box-icon>
            </div>
            <p>We did</p>
            {/* {aiAnswer && <p>{aiAnswer}</p>} */}
        </div>
    </div>
  )
}

export default ChatContainer