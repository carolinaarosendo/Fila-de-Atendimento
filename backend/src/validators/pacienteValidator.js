const PRIORIDADES_VALIDAS = ['baixa', 'media', 'alta']
const STATUS_VALIDOS = ['aguardando', 'em_atendimento', 'finalizado']

export function validarPaciente({ nome, prioridade }) {
  if (!nome || nome.trim() === '') {
    return 'O campo nome é obrigatório.'
  }
  if (!prioridade || !PRIORIDADES_VALIDAS.includes(prioridade)) {
    return 'Prioridade inválida. Use: baixa, media ou alta.'
  }
  return null
}

export function validarStatus({ status }) {
  if (!status || !STATUS_VALIDOS.includes(status)) {
    return 'Status inválido. Use: aguardando, em_atendimento ou finalizado.'
  }
  return null
}