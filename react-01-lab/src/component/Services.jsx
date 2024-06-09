import React from 'react'

function Services({services, price}) {
  return (
    <div className='main'>
        <div>
        <p> Services: {services}</p>
        <p>Proce: {price}</p>
        </div>
        
      
    </div>
  )
}

export default Services
