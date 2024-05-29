import { ElementType } from 'react'

export interface TituloProps {
    principal: string
    secundario: string
    icone: ElementType
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex gap-2">
            <props.icone size={60} stroke={1} />
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">{props.principal}</h1>
                <h2 className="text-sm text-zinc-400">{props.secundario}</h2>
            </div>
        </div>
    )
}
