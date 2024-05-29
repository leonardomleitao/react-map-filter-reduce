import Aula from '@/data/model/Aula'
import { IconCircleFilled } from '@tabler/icons-react'

export interface StatusAulaProps {
    valor: Aula['status']
    semEstilo?: boolean
    onClick?: (status: string) => void
}

export default function StatusAula(props: StatusAulaProps) {
    function cor() {
        switch (props.valor) {
            case 'publicada':
                return 'text-green-500'
            case 'rascunho':
                return 'text-yellow-500'
            case 'desativada':
                return 'text-red-500'
        }
    }

    return (
        <div
            className={`
                flex justify-center items-center gap-2
                ${props.semEstilo ? '' : 'w-36 py-2 rounded-xl bg-black'}
            `}
            onClick={() => props.onClick?.(props.valor)}
        >
            <IconCircleFilled size={15} className={cor()} />
            <span className={cor()}>{props.valor}</span>
        </div>
    )
}
