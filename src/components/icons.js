function Icons({icon, descricao='a'}){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="bg-vermelho rounded-full size-40 flex justify-center items-center mb-5">
                <img src={icon} alt="a" className="size-24"/>
            </div>
            <div className="border border-branco rounded-xl h-32 w-72 text-center flex items-center justify-center">
                <p className="text-branco">{descricao}</p>
            </div>
        </div>
    )
}

export default Icons