export function formatarTempo(tempoEmSegundos) {

    const minutos = Math.floor(tempoEmSegundos / 60);

    const segundos = tempoEmSegundos % 60;
    
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundos).padStart(2, '0');
    
    return `${minutosFormatados}:${segundosFormatados}`;
}