import { useRef, useState } from 'react'

export const App = () => {
  const videoElementRef = useRef(null)
  console.log(videoElementRef.current)
  return (
    <div>
      <video
        ref={videoElementRef}
        src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
      ></video>
      <button
        onClick={() => {
          videoElementRef.current.play()
        }}
      >
        {'click me'}
      </button>
    </div>
  )
}

//create vid player using a video element, and build a custom control bar using divs and buttons,
//need to use ref hook to get a ref to video element so you can use the video element api(play,pause,current time)
//buttons in control bar will call those functions
//https://gist.github.com/jsturgis/3b19447b304616f18657
//
