import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import PaintingPage from "./PaintingContainer";
//accept img src
function PaintForm() {

  const [formData, setFormData] = useState ({
    img_src: '',
    painting_title: '',
    colors:''
  })

//function to handle form changes
function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  })
}
  //function to submit
  function handleSubmit(event) {
    event.preventDefault()
    
    const newPainting = {
      name: formData.name,
      painting_title: formData.painting_title,
      colors: formData.colors
    }

    fetch("http://localhost:3000/paintings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPainting)
    })
      .then(res => res.json())
      .then(data => {
        PaintingPage(data)
        // clear the form after successfully submitting
        setFormData({
            img_src: '',
            painting_title: '',
            colors:''
        })
      })

  }

  return (
    <div>
      <h3>Add a Painting!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name of Artist" 
            placeholder="Name" 
            name="Name" 
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="Painting Title" 
            placeholder="Title" 
            name="painting_title" 
            value={formData.painting_title}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Colors in the Painting"
            placeholder="Colors"
            name="colors"
            value={formData.colors}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PaintForm;
