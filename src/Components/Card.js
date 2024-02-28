import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { useState } from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
} from '@fluentui/react/lib/DocumentCard';
import { IIconProps } from '@fluentui/react/lib/Icon';
import { ImageFit } from '@fluentui/react/lib/Image';

const people = [
  { name: 'Annie Lindqvist' },
  { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
  { name: 'Aaron Reid', },
  { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
];

const oneNoteIconProps = {
  iconName: 'OneNoteLogo',
  styles: { root: { color: '#813a7c', fontSize: '120px', width: '120px', height: '120px' } },
};

const DocumentCardComponent = () => {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const cardStyles = {
    root: { display: 'inline-block', marginRight: 20, marginTop:100, marginBottom: 20, width: 320 },
  };
  const submit=()=>{
    let formdata={userName,password}
    alert(formdata)
  }

  return (
    <div >
      <DocumentCard
        styles={cardStyles}
       
      >
      <div className='d-grid '>
      <h3 style={{color:'brown'}}  >Login</h3>
      <div>
      <input onChange={(e)=>{
        setUserName(e.target.value)
      }} className='mt-4'/>
      <input onChange={(e)=>{
        setPassword(e.target.value)
      }} className='mt-4'/>
      </div>
     
      
  <div>
  <PrimaryButton onClick={()=>submit()} className='mt-4 w-25'>Login</PrimaryButton>

  </div>
      
      </div>

   
      

        <DocumentCardImage height={0}  >
        </DocumentCardImage>
        
        <DocumentCardDetails>
        <p>sign up</p>

        </DocumentCardDetails>
        <p>forget password</p>
      </DocumentCard>
    
    </div>
  );
};

export default DocumentCardComponent;
