import React from 'react'
import {Container} from 'react-bootstrap'
import { Instagram,Linkedin,Github } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className='bg-dark py-5'>
        <Container className='d-md-flex justify-content-between mx-auto text-white d-sm-block'>
        <div className=''>
            <h1>SpartanHarvey</h1>
            <>Copyright &copy; 2022 Spartanharvey.me All Rights Reserved</>
        </div>
        <div className=''>

        <a className='m' href="https://www.instagram.com/gnathan_9" ><Instagram size={50}/></a>
        <a className='m mx-5 sm-p-5' href="https://www.linkedin.com/in/jorgengimbi" ><Linkedin size={50}/></a>
        <a className='m' href="https://www.github.com/spartanharvey" ><Github  size={50}/></a>
        </div>

        </Container>
    </div>
  )
}

export default Footer