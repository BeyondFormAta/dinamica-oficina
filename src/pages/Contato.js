import whatsapp from '../images/icons/whatsapp.png'
import instagram from '../images/icons/instagram.png'
import facebook from '../images/icons/facebook.png'
import logo from '../images/logo dinamica.jpg'

function Contato(){
    
    const contatos = [
        {
            nome: 'TELEFONE',
            info: '(18) 99675-8865'
        },
        {
            nome: 'EMAIL',
            info: 'dinamicaoficina@gmail.com'
        }
    ]
    
    const icons = [
        {
            icon: whatsapp,
            link: ''
        },
        {
            icon: instagram,
            link: ''
        },
        {
            icon: facebook
        }
    ]

    return(
        <div className="h-screen bg-preto flex items-center justify-around">
            <div>
                <h1 className="text-titulo text-6xl font-bold mb-16">Fale conosco</h1>
                {contatos.map((item)=>(
                    <li>
                        <h3 className="text-3xl text-titulo font-bold">{item.nome}</h3>
                        <p className="text-3xl text-branco">{item.info}</p>
                    </li>
                ))}
                <li>
                    <h3 className="text-3xl text-titulo font-bold mb-5">SOCIAL</h3>
                    <div className='flex space-x-5 cursor-pointer w-fit'>
                        {icons.map((icon)=>(
                            <div className='border-2 border-titulo rounded-full size-16 flex items-center justify-center'>
                                <img src={icon.icon} alt='icon' className='w-10'/>
                            </div>
                        ))}
                    </div>
                </li>
            </div>
            <div className="size-96">
                <img src={logo} alt="logo dinamica"/>
            </div>
        </div>
    )
}

export default Contato