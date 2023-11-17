export const VolumeControl = ({ videoRef }) => {
  return (
    <div>
      <button
        onClick={() => {
          videoRef.current.volume = Math.min(videoRef.current.volume + 0.1, 1)
        }}
      >
        {'volume up'}
      </button>
      <button
        onClick={() => {
          videoRef.current.volume = Math.max(videoRef.current.volume - 0.1, 0)
        }}
      >
        {'volume down'}
      </button>
    </div>
  )
}
