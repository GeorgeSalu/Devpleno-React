import React from 'react'

const MostarTempo = (props) => {
  const tempo = props.tempo
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? '0' + minutos : minutos
  const segundosStr = segundos < 10 ? '0' + segundos : segundos
  return (
    <p>
      {`${minutos}:${segundos}`}<br />
      Tempo medio por volta
    </p>
  )
}


export default MostarTempo