export const VideoButtonPause = ({ text, videoRef }) => {
  return (
    <button
      onClick={() => {
        videoRef.current.pause()
      }}
    >
      {text}
    </button>
  )
}
