import Aula from '@/data/model/Aula'
import Duracao from '@/data/utils/Duracao'
import StatusAula from './AulaStatus'

export interface LinhaAulaProps {
    aula: Aula
}

export default function LinhaAula(props: LinhaAulaProps) {
    return (
        <div className="flex p-4 justify-between items-center rounded-xl bg-zinc-900">
            <div className="flex flex-col">
                <span className="text-3xl font-black">{props.aula.nome}</span>
                <span className="text-zinc-400">{props.aula.curso}</span>
            </div>
            <div className="flex items-center gap-16">
                <StatusAula valor={props.aula.status} />
                <div className="text-4xl font-extrabold">
                    {Duracao.formatar(props.aula.duracao)}
                </div>
            </div>
        </div>
    )
}
