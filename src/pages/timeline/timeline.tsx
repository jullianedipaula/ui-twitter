import { FormEvent, KeyboardEvent, useState } from "react"
import { Tweet } from "../../components/Tweet"
import { Header } from "../../header/Header"
import { Separator } from "../../separator/Separator"
import "./timeline.css"

export function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

    return(
        <main className="timeline">
        <Header title="Home"/>
        
        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/jullianedipaula.png" alt="Julliane Di Paula" />
            <textarea
              id="tweet" 
              placeholder="What's happening?"
              value={newTweet}
              onKeyDown={handleHotkeySubmit}
              onChange={event => setNewTweet(event.target.value)} 
             />
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