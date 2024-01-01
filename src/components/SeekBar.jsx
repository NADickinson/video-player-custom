import { useEffect, useRef } from 'react'

export const SeekBar = ({ videoRef }) => {
  const seekBarRef = useRef(null)
  const seekBarWrapperRef = useRef(null)
  const seekBarDownRef = useRef(false)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const seek = seekBarRef.current
    if (!seek) return
    console.log(seekBarRef)

    const onTimeUpdate = () => {
      const duration = video.duration
      const currentTime = video.currentTime
      seek.style.width = `${(currentTime / duration) * 100}%`
    }

    console.log('adding')
    video.addEventListener('timeupdate', onTimeUpdate)

    return () => {
      console.log('removing')
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  useEffect(() => {
    const seekBar = seekBarWrapperRef.current
    if (!seekBar) return
    const setVideoTimeFromMousePosistion = e => {
      const pageMouseX = e.pageX
      const seekBarLeft = seekBar.getBoundingClientRect().left
      const relativeMouseX = pageMouseX - seekBarLeft
      const barWidth = seekBar.getBoundingClientRect().width
      const percentOfBarClicked = relativeMouseX / barWidth
      const vidDuration = videoRef.current.duration
      videoRef.current.currentTime = vidDuration * percentOfBarClicked
      console.log('my special move!', relativeMouseX)
    }
    const onMove = e => {
      if (!seekBarDownRef.current) return
      setVideoTimeFromMousePosistion(e)
    }
    const onDown = e => {
      seekBarDownRef.current = true
      setVideoTimeFromMousePosistion(e)
      console.log('down')
    }

    const onUp = () => {
      seekBarDownRef.current = false
      console.log('up')
    }
    window.addEventListener('mousemove', onMove)
    seekBar.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      seekBar.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <div ref={seekBarWrapperRef} style={{ height: '50px', backgroundColor: 'black', position: 'relative' }}>
      <div
        ref={seekBarRef}
        style={{
          backgroundColor: 'hotpink',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      ></div>
    </div>
  )
}
