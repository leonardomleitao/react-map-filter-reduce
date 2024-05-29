import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IconChevronDown, IconCircleFilled, IconFilter } from '@tabler/icons-react'
import StatusAula from './AulaStatus'

export interface FiltrarStatusProps {
    filtroMudou?: (status: string | null) => void
}

export default function FiltrarStatus(props: FiltrarStatusProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <div className="flex items-center gap-2">
                    <IconFilter />
                    <span>Filtrar Por</span>
                    <IconChevronDown className="text-zinc-400" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => props.filtroMudou?.(null)}>
                    <div className="flex items-center gap-2 text-zinc-400">
                        <IconCircleFilled size={15} />
                        <span>Nenhum</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <StatusAula valor="publicada" semEstilo onClick={props.filtroMudou} />
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <StatusAula valor="rascunho" semEstilo onClick={props.filtroMudou} />
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <StatusAula valor="desativada" semEstilo onClick={props.filtroMudou} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
