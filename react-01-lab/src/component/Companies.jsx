import React from 'react'
// import '../component/companies.css'
import "../component/companies.css"
import Services from "./Services"

import Programmers from './Programmers'
function Companies({name, emp, year, num}) {
  return (
    <div className='main'>
        <div className='firstDiv'>
            <p style={{fontSize:"1.5em"}}>Compnay Name: {name}</p>
            <p>Worker Number: {num}</p>
            <p>Year of Founded: {year}</p>

            <Services services={"programming"} price={10000}/>

            <h2>Employers:</h2>

            <div className='cards' >
          
            {emp.map((emp) => (
              <Programmers 
                name={emp.names}
                prog={emp.ProgrammingLanguages}
                years={emp.years}
                company={emp.Company}
                className="card1"
            />
          ))}

                

    {/* <Programmers name={"Meznah"} prog={["Java", "Python", "JS"]} years={5} company={"Axis"} className="card1"/>
    <Programmers name={"Nora"} prog={["Java", "Python", "JS"]} years={5} company={"Axis"} className="card1"/>
    <Programmers name={"Reem"} prog={["Java", "Python", "JS"]} years={5} company={"Axis"} className="card1"/> */}

    </div>
            
        </div>
      
    </div>
  )
}

export default Companies
