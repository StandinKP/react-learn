import React, { Fragment } from 'react'
import Provider from './Provider'
import Context from './Context'

const Agents = () => {
  return <AgentOne />
}
const AgentOne = () => {
  return <AgentTwo />
}
const AgentTwo = () => {
  return <AgentThree />
}
const AgentThree = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Info</h3>
          <p>Mission name: {context.data.mname}</p>
          <p>Agent code: {context.data.agent}</p>
          <p>Mission status: {context.data.accept}</p>
          <button onClick={context.isMissionAccepted}>Choose to accept</button>
        </Fragment>
      )}
    </Context.Consumer>
  )
}

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App
