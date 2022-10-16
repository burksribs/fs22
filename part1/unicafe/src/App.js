import { useState } from 'react'

const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Button = ({ click, text }) => {
  return (
    <div>
      <button onClick={click}>{text}</button>
    </div>
  )
}

const StatisticTableRow = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ feedbacks }) => {
  const all = feedbacks.good + feedbacks.neutral + feedbacks.bad
  const average = (feedbacks.good - feedbacks.bad) / all
  const positive = feedbacks.good / all * 100

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticTableRow text="good" value={feedbacks.good} />
          <StatisticTableRow text="neutral" value={feedbacks.neutral} />
          <StatisticTableRow text="bad" value={feedbacks.bad} />
          <StatisticTableRow text="all" value={all} />
          <StatisticTableRow text="average" value={average} />
          <StatisticTableRow text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const incGood = () =>
    setFeedbacks({ ...feedbacks, good: feedbacks.good + 1 })
  const incNeutral = () =>
    setFeedbacks({ ...feedbacks, neutral: feedbacks.neutral + 1 })
  const incBad = () =>
    setFeedbacks({ ...feedbacks, bad: feedbacks.bad + 1 })

  return (
    <div>
      <Header name="give feedback" />
      <Button click={incGood} text={"good"} />
      <Button click={incNeutral} text={"neutral"} />
      <Button click={incBad} text={"bad"} />
      <Header name="statistics" />
      <Statistics feedbacks={feedbacks} />
    </div>
  )
}

export default App