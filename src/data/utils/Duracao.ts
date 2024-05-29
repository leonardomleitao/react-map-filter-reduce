export default class Duracao {
    static formatar(segundos: number): string {
        const horas = Math.floor(segundos / 3600)
        const minutos = Math.floor((segundos % 3600) / 60)
        const segundosRestantes = segundos % 60

        const h = horas.toString().padStart(2, '0')
        const m = minutos.toString().padStart(2, '0')
        const s = segundosRestantes.toString().padStart(2, '0')
        return `${h}h ${m}m ${s}s`
    }
}
