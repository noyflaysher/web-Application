import { useEffect, useRef } from "react";

export default function Canvas({ width, height }) {
  const myCanvas = useRef();

  useEffect(() => {
    const context = myCanvas.current.getContext("2d");
    const image = new Image();

    image.src = "https://i.ibb.co/q1Ydr1d/Logo.png";
    image.onload = () => {
      context.drawImage(image, 30, -50, 300, 300);
    };
  });

  return <canvas className="logo" ref={myCanvas} />;
}

// import React, { useEffect, useState, useEffect } from 'react'

// const [image,setImage]=useState(null);

// const canvas=useRef(null)

// useEffect(()=>{

// })

// useEffect(()=>{
//     const image=new Image();
//     image.src="https://www.dreamstime.com/recipe-concept-vector-linear-icon-isolated-transparent-backgr-background-transparency-outline-style-image130085363";
//     image.onload=() => setImage(image)} , [])
// })

// export default function Canvas() {
//   return (
//     <div>
//         <canvas
//         ref={canvas}
//         width={400}
//         height={300}>
//     </div>
//   )
// }
