export const VideoButtonPlay = ({ text, videoRef }) => {
  return (
    <button
      onClick={() => {
        videoRef.current.play()
      }}
    >
      {text}
    </button>
  )
}
