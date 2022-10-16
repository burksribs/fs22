import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Header = ({title}) => {
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({ click, name }) => {
  return (
    <div>
      <button onClick={click}>{name}</button>
    </div>
  )
}

const Anectode = ({ anectode, vote }) => {
  return (
    <div>
      {anectode}
      <p>has {vote} votes</p>
    </div>
  )
}

const MostVotedAnecdote = ({anecdotes, votes}) => {
  const maxVotes = Math.max( ...votes )
  const mostVotedIndex = votes.indexOf(maxVotes)

  if (maxVotes === 0) {
    return (
      <div>
        <p>no votes yet</p>
      </div>
    )
  }

  return(
      <Anectode anectode={anecdotes[mostVotedIndex]} vote={maxVotes} />
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState(Array(anecdotes.length).fill(0))

  const nextAnectode = () => setSelected(getRandomInt(anecdotes.length))
  const setToVoted = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVoted(updatedVotes)
  }

  return (
    <div>
      <Header title="Anectode of the day" />
      <Anectode anectode={anecdotes[selected]} vote={votes[selected]} />
      <Button click={setToVoted} name="vote" />
      <Button click={nextAnectode} name="next anectode" />
      <Header title="Anectode with most votes" />
      <MostVotedAnecdote  anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App