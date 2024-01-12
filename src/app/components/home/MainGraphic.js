import '@/app/fonts.css'
function MainGraphic() {
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
        "JavaScript-frameworks-cuate.svg",
        "Printed-circuit-board-pana.svg",
    ]
    const choosed_index = Math.floor(Math.random() * graphics_arr.length)
    console.log(choosed_index);
  return (
    <div className="sm:mx-20 mx-5 bg-center sm:bg-right your-custom-class flex justify-center flex-col" style={{ height: 'calc(100vh - 5.2rem)', backgroundImage: `url(/images/main-graphics/${graphics_arr[choosed_index]})`, backgroundRepeat:'no-repeat'}}>
        <h1 className="w-50 mb-3 text-black text-5xl font-extrabold" style={{fontFamily:'Azonix'}}>Swasau Technology</h1>
        <div className="text-3xl block font-medium" style={{fontFamily:'MoonLight'}}>
            Creating Dream Sollutions
        </div>
    </div>
  )
}

export default MainGraphic