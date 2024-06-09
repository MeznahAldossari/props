
import './App.css'
import Programmers from './component/Programmers'
import Services from './component/Services'
import Companies from './component/Companies'

function App() {
  let obj1 ={
   names:"meznah",
   ProgrammingLanguages: ["java", "JS"],
   Experiance:5,
   Company:"Axis"
  }
  let obj2 ={
    names:"meznah",
    ProgrammingLanguages: ["java", "JS"],
    Experiance:5,
    Company:"Axis"
   }
   let obj3 ={
    names:"meznah",
    ProgrammingLanguages: ["java", "JS"],
    Experiance:5,
    Company:"Axis"
   }

  //  

  let obj4 ={
    names:"meznah",
    ProgrammingLanguages: ["java", "JS"],
    Experiance:5,
    Company:"Tuwaiq"
   }
   let obj5 ={
     names:"meznah",
     ProgrammingLanguages: ["java", "JS"],
     Experiance:5,
     Company:"Tuwaiq"
    }
    let obj6 ={
     names:"meznah",
     ProgrammingLanguages: ["java", "JS"],
     Experiance:5,
     Company:"Tuwaiq"
    }



    let obj7 ={
      names:"sara",
      ProgrammingLanguages: ["java", "JS"],
      Experiance:5,
      Company:"Elm"
     }
     let obj8 ={
       names:"sara",
       ProgrammingLanguages: ["java", "JS"],
       Experiance:5,
       Company:"Elm"
      }
      let obj9 ={
       names:"sara",
       ProgrammingLanguages: ["java", "JS"],
       Experiance:5,
       Company:"Elm"
      }

  return (
    <>  
    <Companies name={"Axis"} year={10} emp={[obj1,obj2,obj3]}/>
    <Companies name={"Tuwaiq"} year={10} emp={[obj4,obj5,obj6]}/>
    <Companies name={"Elm"} year={10} emp={[obj7,obj8,obj9]}/>
    
    </>
  )
}

export default App
