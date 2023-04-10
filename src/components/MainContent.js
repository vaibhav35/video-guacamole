import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const buttonListNames = ["All","Javascript","Comedy","Stocks","Recently uploaded", "Computer programming", "Live",]
const MainContent = () => {
  return (
    <div className='col-span-10'>
      <main>
        <ButtonList buttonListNames = {buttonListNames}/>
        <VideoContainer />
      </main>
    </div>
  )
}

export default MainContent