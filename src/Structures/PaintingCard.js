import React from "react";
import { Card } from "semantic-ui-react";

function PaintingCard({painting}) {
  //need state to show front or back
  
  const {img_src, painting_title, colors, youtube_src } = painting
  //toggle to show front or back
  return (
    <Card>
      <div> 
        <div className="image" > 
        <img alt="smd" src={img_src}> </img> 
        </div>
        <div className="content">
          <div className="header">{ painting_title }</div>
        </div>
        <div className="extra content">{youtube_src}
          <span>
            {colors}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PaintingCard;
