import React from "react";
import PaintingCard from "./PaintingCard";
import { Card } from "semantic-ui-react";

function PaintingCollection({ painting }) {
  console.log(painting)
// map over our painting to create a PaintCard
  const cards = painting.map(paint => (
    <PaintingCard key={paint.id} painting={paint} />
))

  return (
    <Card.Group itemsPerRow={6}>
      { cards }
    </Card.Group>
  );
}

export default PaintingCollection;