import React from "react";

function GallaryBody(props) {
  // TODO: Access the image data from props
  const data = props;
  
  return (
    <div>
      {/* 
        TODO: Map through the image data here.
        For each image, render:
        <div key={image.id} className="column">
          <img src={image.img} alt={image.alt} />
        </div>
      */}
      {
        props.data.map((image) => 
        <div key={image.id} className="column">
          <img src={image.img} alt={image.alt} />
          </div>
      )
      }

      
    </div>
  );
}

export default GallaryBody;