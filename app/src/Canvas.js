import React, { useState, useRef, useEffect } from "react";

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

  const handleSaveImage = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png");
  
    // Prompt the user to enter a file name with the folder name
    const fileNameWithFolder = prompt("Enter file name with folder (e.g., doodle/image.png):");
    if (!fileNameWithFolder) return; // If user cancels or doesn't enter anything
  
    // Create an anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
  
    // Set the download attribute to the specified file name
    downloadLink.download = fileNameWithFolder;
  
    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
  
    // Trigger a click event on the anchor element
    downloadLink.click();
  
    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <canvas ref={canvasRef} width={570} height={300} />
      <button onClick={handleSaveImage}>Save as PNG</button>
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