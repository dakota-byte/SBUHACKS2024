import React, { useState, useRef, useEffect } from "react";

import axios from "axios";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const startDrawing = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        setIsDrawing(true);
        context.beginPath();
        context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
      }
    };

    const draw = (event) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      context.lineTo(x, y);
      context.stroke();
    };

    const finishDrawing = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", finishDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", finishDrawing);
    };
  }, [isDrawing]);

  const handleSaveImageToServer = async () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png");
  
    const base64Data = dataURL.split(',')[1];

    const encodedImageName = encodeURIComponent(base64Data);
  
    try {
      const response = await fetch("http://localhost:5000/api/save-image", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imageData: encodedImageName })
      });
  
      if (!response.ok) {
        throw new Error('Failed to save image');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div>
      <canvas ref={canvasRef} width={570} height={300} />
      <button onClick={handleSaveImageToServer}>Save as PNG</button>
      {imageData && (
        <div>
          <h2>Saved Image:</h2>
          <img src={imageData} alt="Canvas" />
        </div>
      )}
    </div>
  );
};

export default Canvas;