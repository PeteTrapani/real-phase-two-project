import React from "react";
import { Card, Image } from "semantic-ui-react";

function PaintingCard({painting}) {
  
  const {img_src, painting_title, colors, youtube_src } = painting

  return (
    <Card>
      <div>
        <Image src={img_src} alt="smd" />
        <div className="content">
          <div className="header">Title: {painting_title}</div>
        </div>
        <div>
                <a href={youtube_src} target="_blank" rel="noopener noreferrer">Paint Along!</a>
              </div>
        <div>
          <span>Colors:{colors}</span>
        </div>
      </div>
    </Card>
  );
}

//about, 

export default PaintingCard;
