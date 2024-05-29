import Aula from '@/data/model/Aula'
import LinhaAula from './LinhaAula'

export interface ListaAulasProps {
    aulas: Aula[]
}

export default function ListaAulas(props: ListaAulasProps) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-5">
                {props.aulas.map(function (aula: Aula) {
                    return <LinhaAula key={aula.id} aula={aula} />
                })}
            </div>
        </div>
    )
}
