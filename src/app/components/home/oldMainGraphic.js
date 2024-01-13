'use client'
import '../../fonts.css'
function MainGraphic({grad}) {  
    const graphics_arr = [
        "Collaboration-cuate.svg",
        "Printed-circuit-board-amico.svg",
        "Printed-circuit-board-rafiki.svg",
        "Creative-team-bro.svg",
        "Printed-circuit-board-bro.svg",
        "Process-cuate.svg",
        "Hand-coding-pana.svg",
        "Printed-circuit-board-cuate.svg",
        "Server-status-cuate.svg",        
        "Printed-circuit-board-pana.svg",
    ]
    const choosed_graphic_index = Math.floor(Math.random() * graphics_arr.length)    
  return (
    <div>
    <video        
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{zIndex:'-10'}}
      >
        <source src="/videos/videoplayback.webm" type="video/webm" />
        {/* You can add additional source elements for different video formats (webm, ogg, etc.) */}
      </video>
      <div className="sm:justify-center text-white justify-center text-center  sm:mx-20 mx-5 bg-center sm:bg-right your-custom-class flex  flex-col" style={{ height: 'calc(100vh - 5rem)', backgroundRepeat:'no-repeat'}}>
      <div className='p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200'>
          <h1 className="w-50 sm:text-5xl text-xl font-extrabold" style={{fontFamily:'Azonix'}}>Swasau Technology</h1>
          <div className="mt-3 sm:text-3xl text-md block font-medium" style={{fontFamily:'MoonLight'}}>
              Creating Dream Sollutions
          </div>
      </div>
      </div>
    </div>
  )
}

export default MainGraphic