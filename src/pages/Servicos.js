import Icons from "../components/icons"
import oleo from "../images/oleo-motor.png"
import motor from "../images/motor-de-carro.png"
import revisao from "../images/revisao-carro.png"

const servico = [
    {
        imagem:oleo,
        descricao:"Troca de óleo"
    },
    {
        imagem:motor,
        descricao:"Troca de moto"
    },
    {
        imagem:revisao,
        descricao:"Revisão do carro"
    }
]

function Servicos(){
    return(
        <div className="bg-preto text-center py-10">
            <h1 className="text-titulo font-bold text-5xl mb-12">Serviços</h1>
            <div className="flex justify-evenly">
                {servico.map(item=>(
                    <Icons icon={item.imagem} nome={item.descricao} />
                ))}
            </div>
        </div>
    )
}

export default Servicos