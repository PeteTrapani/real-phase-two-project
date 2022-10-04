import React, { useEffect, useState } from "react";
import PaintingCollection from "./PaintingCollection";
import PaintForm from "./PaintForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PaintingPage() {
  //set up state function
  const [painting, setPainting] = useState ([])
  const [searchTerm, setSearchTerm] = useState('')
  //fetch our data
  useEffect(() => {
    fetch('http://localhost:3000/paintings')
      .then(res => res.json())
      .then(data => setPainting(data))
      console.log(setPainting)
  }, [])
  // function for single state
  const handleAddPainting = (newPainting) => {
    setPainting([newPainting, ...painting])
  }

  const paintingToDisplay = painting.filter(paint =>
    paint.name.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return (
    <Container>
      <h1>Painting Searcher</h1>
      <br />
      <PaintForm onAddPainting={handleAddPainting} />
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PaintingCollection painting={paintingToDisplay}/>
    </Container>
  );
}

export default PaintingPage;
