import React, { useEffect, useState } from "react";
import PaintingCollection from "./PaintingCollection";
import PaintForm from "./PaintForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PaintingPage() {
  //set up state function
  const [usePainting, setPainting] = useState ([])
  const [useSearchTerm, setSearchTerm] = useState('')
  //fetch our data
  useEffect(() => {
    fetch('http://localhost:3000/paintings')
      .then(res => res.json())
      .then(data => setPainting(data))
      console.log(setPainting)
  }, [])
  // function for single state
  const handleAddPainting = (newPainting) => {
    setPainting([newPainting, ...usePainting])
  }

  const paintingToDisplay = usePainting.filter(paint =>
    paint.painting_title.toLowerCase().includes(useSearchTerm.toLowerCase())
  )


  return (
    <div>
    <Container>
      <h1>Painting Searcher</h1>
      <br />
      <PaintForm onAddPainting={handleAddPainting} />
      <br />
      <Search searchTerm={useSearchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PaintingCollection painting={paintingToDisplay}/>
    </Container>
    </div>
  );
    
}

export default PaintingPage;
