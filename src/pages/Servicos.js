import Icons from "../components/icons"
import oleo from "../images/oleo-motor.png"
import motor from "../images/motor-de-carro.png"
import revisao from "../images/revisao-carro.png"
import cambio from '../images/cambio-de-marchas.png'
import correia from '../images/correia-dentada.png'
import abs from '../images/carro.png'
import direcao from '../images/direcao.png'
import freio from '../images/freio.png'
import suspensao from '../images/suspensao-do-carro.png'

const servico = [
    {
        imagem:oleo,
        descricao:"Troca de óleo"
    },
    {
        imagem:motor,
        descricao:"Motor"
    },
    {
        imagem:revisao,
        descricao:"Revisão"
    },
    {
        imagem: cambio,
        descricao:'Câmbio'
    },
    {
        imagem: abs,
        descricao:'ABS'
    },
    {
        imagem: correia,
        descricao:'Correia dentada'
    },
    {
        imagem: direcao,
        descricao:'Direção'
    },
    {
        imagem: freio,
        descricao:'Freio'
    },
    {
        imagem: suspensao,
        descricao:'Suspensão'
    }
]

function Servicos(){
    return(
        <div className="bg-preto text-center py-10">
            <h1 className="text-titulo font-bold text-5xl mb-12">Serviços</h1>
            <div className="grid lg:grid-cols-3 gap-y-10 justify-evenly">
                {servico.map(item=>(
                    <Icons icon={item.imagem} nome={item.descricao} link={item.descricao}/>
                ))}
            </div>
        </div>
    )
}

export default Servicos