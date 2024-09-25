function Icons({icon, nome='a', link}){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="bg-vermelho rounded-full size-40 flex justify-center items-center mb-5">
                <img src={icon} alt="a" className="size-24"/>
            </div>
            <div className="border border-branco rounded-xl h-40 w-72 text-center flex flex-col items-center justify-center space-y-8">
                <p className="text-branco text-xl font-bold">{nome}</p>
                <button className="bg-vermelho rounded-xl h-14 w-56 text-branco text-xl font-bold hover:bg-[#ad0c18] transition-all duration-250">FAZER ORÇAMENTO</button>
            </div>
        </div>
    )
}

export default Icons