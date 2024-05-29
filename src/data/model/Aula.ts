export default interface Aula {
    id: string
    nome: string
    curso: string
    duracao: number
    status: 'publicada' | 'rascunho' | 'desativada'
}
