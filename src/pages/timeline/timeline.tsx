import { Tweet } from "../../components/Tweet"
import { Header } from "../../header/Header"
import { Separator } from "../../separator/Separator"
import "./timeline.css"

const tweets = [ 
    'oi tudo bem',
    'como você está',
    'estou testando a funcionalidade map'
  ]

export function Timeline(){
    return(
        <main className="timeline">
        <Header title="Home"/>
        
        <form className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/jullianedipaula.png" alt="Julliane Di Paula" />
            <textarea id="tweet" placeholder="What's happening?" />
          </label>

          <button type="submit">
            Tweet
          </button>
        </form>

        <Separator />

        {tweets.map(tweets => {
          return <Tweet key={tweets} content={tweets} />
        }) }
      </main>
    )
}