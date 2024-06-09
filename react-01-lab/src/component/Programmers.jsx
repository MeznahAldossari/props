import React from 'react'
import "../component/programmers.css"

function Programmers({name, prog, years, company}) {

   
  return (
    <div className='main'>
      <div className='firsrDiv' style={{backgroundColor: company== "Tuwaiq"? "purple": "green"}}>
        <p>Name:{name}</p>
        <p>Programming Languages:{prog}</p>
        <p>Years of Experiance: {years}</p>
        <p>Company: {company}</p>

      </div>
    </div>
  )
}

export default Programmers
