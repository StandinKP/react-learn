import React, { useState } from 'react'
import Icon from './components/Icon'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { Card, CardBody, Button, Col, Row, Container } from 'reactstrap'

const itemArray = new Array(9).fill('empty')

const App = () => {
  const [isCross, setIsCross] = useState(false)
  const [winMsg, setWinMsg] = useState('')

  const reloadGame = () => {
    setIsCross(false)
    setWinMsg('')
    itemArray.fill('empty', 0, 9)
  }

  const isWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMsg(`${itemArray[0]} wins!!`)
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMsg(`${itemArray[3]} wins!!`)
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMsg(`${itemArray[6]} wins!!`)
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMsg(`${itemArray[0]} wins!!`)
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMsg(`${itemArray[1]} wins!!`)
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMsg(`${itemArray[2]} wins!!`)
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMsg(`${itemArray[0]} wins!!`)
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMsg(`${itemArray[2]} wins!!`)
    }
  }

  const changeItem = (itemNumber) => {
    if (winMsg) {
      return toast(winMsg, { type: 'success' })
    }

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle'
      setIsCross(!isCross)
    } else {
      return toast('Already Filled!', { type: 'error' })
    }

    isWinner()
  }

  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={6} className='offset-md-3'>
          {winMsg ? (
            <div className='my-2'>
              <h1 className='text-success text-uppercase text-center'>{winMsg}</h1>
              <Button color='success' block onClick={reloadGame}>
                Reload The Game
              </Button>
            </div>
          ) : (
            <div className='bg-dark text-center justify-content-center'>
              <h1 className='text-center text-white mb-4'>{isCross ? 'Cross' : 'Circle'}'s turn</h1>
              <hr />
            </div>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => (
              <Card color='info' onClick={() => changeItem(index)}>
                <CardBody className='box'>
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
