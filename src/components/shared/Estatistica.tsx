import { ElementType } from 'react'

export interface EstatisticaProps {
    icone: ElementType
    iconeCor?: string
    valor: any
    texto: string
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className="flex items-center justify-between p-5 rounded-xl bg-zinc-900">
            <props.icone size={70} stroke={1} className={props.iconeCor ?? 'text-zinc-300'} />
            <div className="flex flex-col items-end">
                <span className="text-3xl font-black">{props.valor}</span>
                <span className="text-sm text-zic-400">{props.texto}</span>
            </div>
        </div>
    )
}
