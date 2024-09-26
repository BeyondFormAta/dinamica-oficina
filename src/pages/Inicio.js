import whatsapp from "../images/icons8-whatsapp.svg"
import logo from "../images/logo dinamica.jpg"

function Inicio(){
    return(
        <div className="bg-vermelho h-screen relative flex items-center justify-center lg:justify-around">
            <div className="space-y-9 lg:ml-[-90px] flex flex-col text-left items-center justify-center">
                <h3 className="text-branco font-bold italic tracking-wider relative right-8">DINÂMICA OFICINA MECANICA</h3>
                <h1 className="text-branco text-7xl font-bold">A solução <br/>para seu<br/> veículo</h1>
                <p className="text-branco text-2xl font-light tracking-wide">Entre em contato conosco pelo<br/> whatsapp e agende uma visita</p>
                <button onClick={()=>{window.open('https://wa.me/5518996758865?text=', '_blank')}} className="bg-[#25d366] hover:bg-[#1da450] w-80 h-14 rounded-full text-branco text-xl font-semibold tracking-[0.2em] text-center flex items-center justify-center transition-all duration-450">
                    <img src={whatsapp} alt="logo whatsapp" className="mr-5 ml-[-15px]"/>
                    CONTATO
                </button>
            </div>
            <div className="absolute lg:relative inset-y-0 right-0 size-96">
                <img src={logo} alt="logo dinamica" className="rounded-full invisible lg:visible"/>
            </div>
        </div>
    )
}

export default Inicio