import React, { useState } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const buttonListNames = ["All","Live","Javascript","Comedy","Stocks","Recently uploaded", "Computer programming", ]
const MainContent = () => {

  const [videos, setVideos] = useState([]);

  return (
    <div className='col-span-12 md:col-span-10'>
      <main>
        <ButtonList buttonListNames = {buttonListNames} setVideos = {setVideos}/>
        <VideoContainer videos = {videos} setVideos= {setVideos} />
      </main>
    </div>
  )
}

export default MainContent