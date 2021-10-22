import React from 'react'

const Sources = (source) => {
  if(source.source === null)
    return <></>
  return (
    source.source.map((s) => 
      <div className='chart'>
        <h2>{s.annotations.source_name}</h2>
        <p>{s.annotations.source_description}</p>
        <a href={s.annotations.dataset_link} target='_blank'>Link to the Dataset</a>
      </div>
  )
  )
}

export default Sources
