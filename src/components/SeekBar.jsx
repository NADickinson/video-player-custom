export const SeekBar = ({ videoRef }) => {
  return (
    <div
      onClick={e => {
        const target = e.target
        if (!(target instanceof HTMLDivElement)) {
          return
        }
        console.log(e.clientX, target.getBoundingClientRect().width)
      }}
      style={{ height: '50px', backgroundColor: 'hotpink' }}
    ></div>
  )
}
