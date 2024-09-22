import Icons from "../components/icons"
import oleo from "../images/oleo-motor.png"
import motor from "../images/motor-de-carro.png"
import revisao from "../images/revisao-carro.png"

const servico = [
    {
        imagem:oleo,
        descricao:"Troca de óleo : Descrição breve sobre a troca de óleo"
    },
    {
        imagem:motor,
        descricao:"Troca de motor: Descrição breve sobre a troca de motor"
    },
    {
        imagem:revisao,
        descricao:"Revisão do carro: Descrição breve sobre a revisão"
    }
]

function Servicos(){
    return(
        <div className="bg-preto text-center">
            <h1 className="text-vermelho font-bold text-4xl mb-12">Serviços</h1>
            <div className="flex justify-evenly">
                {servico.map(item=>(
                    <Icons icon={item.imagem} descricao={item.descricao} />
                ))}
            </div>
        </div>
    )
}

export default Servicos