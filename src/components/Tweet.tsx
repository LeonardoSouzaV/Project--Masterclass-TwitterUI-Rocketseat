import "./Tweet.css"
import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react"

import { Link } from "react-router-dom"

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/119985866?v=4"
        alt="Leonardo Souza"
      />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Leonardo Souza</strong>
          <span>@LeonardoSouzaV</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle /> 20
          </button>
          <button type="button">
            <ArrowsClockwise /> 20
          </button>
          <button type="button">
            <Heart /> 20
          </button>
        </div>
      </div>
    </Link>
  )
}
