import React from 'react'

import {Container, Form, Label} from 'components/StyledComponents'

export const Upload = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        }

    return (
    <Container>
      <Form>
          <Label>Choose first image to compare
              <input type="file" />
          </Label>
          <Label>Choose second image to compare
              <input type="file" />
          </Label>
      
        <button type="submit" onClick={onSubmit} >Upload</button>
      </Form>
    </Container>
    )
}