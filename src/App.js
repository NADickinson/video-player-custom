import { useEffect, useRef, useState } from 'react'
import { VideoButtonPlay } from './components/VideoButtonPlay'
import { VideoButtonPause } from './components/VideoButtonPause'
import { VolumeControl } from './components/VolumeControl'
import { SeekBar } from './components/SeekBar'

export const App = () => {
  const videoElementRef = useRef(null)

  const [state, setState] = useState('')
  useEffect(() => {})

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <video
        ref={videoElementRef}
        src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
      ></video>
      <SeekBar videoRef={videoElementRef}></SeekBar>
      <VideoButtonPlay text={'Play'} videoRef={videoElementRef}></VideoButtonPlay>
      <VideoButtonPause text={'Pause'} videoRef={videoElementRef}></VideoButtonPause>
      <VolumeControl videoRef={videoElementRef}></VolumeControl>
    </div>
  )
}
