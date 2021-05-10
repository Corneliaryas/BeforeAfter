import React, {useState} from 'react'

import {Compare} from 'components/Compare'
import {Container, Form, Label, Button} from 'components/StyledComponents'

export const Upload = () => {
    const [imageA, setImageA] = useState("")
    const [imageB, setImageB] = useState("")
    const [showImage, setShowImage] = useState(false)


    const onSubmit = (event) => {
        event.preventDefault();
        setShowImage(true)
        }

    const upLoadImageA = (event) => {
        const imageFile = event.target.files[0];
        const imageURL = URL.createObjectURL(imageFile);
        setImageA(imageURL);
    }

    const upLoadImageB = (event) => {
        const imageFile = event.target.files[0];
        const imageURL = URL.createObjectURL(imageFile);
        setImageB(imageURL);
    }
    return (
    <Container>
    {!showImage &&
      <Form>
        <Label url={imageA}><p>Choose first image to compare</p>
            <input name="Image A" type="file" accept="image/*" id="inputA" onChange={upLoadImageA} />
        </Label>
        <Label url={imageB}>Choose second image to compare
            <input type="file" accept="image/*" id="inputB" onChange={upLoadImageB}/>
        </Label>
      
        <Button type="submit" onClick={onSubmit} >Compare images</Button>
      </Form>
}
    {showImage &&
        <>
            <Compare imageA={imageA} imageB={imageB}/>
            <Button onClick={()=> setShowImage(false)}>New comparison</Button>
        </>
}   
    
    </Container>
    )
}  ;