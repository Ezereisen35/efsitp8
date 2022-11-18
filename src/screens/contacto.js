import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function contacto(){
    return(
    <>
    
        <div class="container text-center">
        <br></br>
            <form>
            
                <MDBInput id='form4Example1' wrapperClass='mb-4' placeholder='Name' />
                <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' placeholder='Email address' />
                <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} placeholder='Message' />

                <MDBBtn type='submit' className='mb-4' block>
                    ENVIAR
                </MDBBtn>
    
            </form>
        </div>
        
    </>
    
    )
}