import React, { useEffect } from "react";

const GlowingBlob = () => {
  useEffect(() => {
    // Function to add noise elements
    const addNoise = () => {
      let noise = "";
      for (let i = 0; i < 100; i++) {
        noise += `
          <circle 
            cx="${Math.random() * 200}" 
            cy="${Math.random() * 200}" 
            r="${Math.random() * 2}"
            fill="rgba(255, 255, 255, ${Math.random() * 0.1})"
          />
        `;
      }
      document.getElementById("blob").innerHTML += noise;
    };

    addNoise();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <svg
        id="blob"
        viewBox="0 0 200 200"
        style={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          filter: "blur(100px) contrast(150%)",
          animation: "rotate 20s infinite ",
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#ff00ff" }} />
            <stop offset="100%" style={{ stopColor: "#00ffff" }} />
          </linearGradient>
        </defs>
        <path fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="200ms"
            repeatCount="indefinite"
            values="
              M44,-76.3C58.3,-69.2,71.9,-59.3,79.9,-45.8C87.8,-32.3,90.1,-15.1,89.3,1.5C88.6,18.1,84.8,34.6,76.5,48.8C68.1,63,55.1,74.8,40.1,80.7C25.1,86.6,8,86.6,-8,83.7C-24,80.8,-38.9,75,-51.9,65.7C-64.8,56.4,-75.9,43.5,-80.6,28.6C-85.4,13.6,-83.9,-3.5,-79.1,-19C-74.3,-34.6,-66.2,-48.6,-54.4,-57.1C-42.6,-65.6,-27,-68.5,-12.1,-70.1C2.9,-71.7,17.5,-71.9,29.7,-83.3C41.9,-94.8,51.7,-117.5,44,-76.3Z;
              M45.2,-76.3C59.6,-69.1,73,-58.7,81.5,-44.9C90,-31,93.6,-13.7,91.6,2.9C89.5,19.4,81.8,35.2,71.5,48.7C61.2,62.2,48.4,73.4,33.6,78.6C18.8,83.7,2,82.8,-14.6,79.5C-31.2,76.2,-47.6,70.5,-61.3,60.1C-75,49.7,-86,34.6,-90.4,17.7C-94.8,0.8,-92.5,-17.9,-85.2,-33.6C-77.9,-49.3,-65.6,-62,-51.2,-69.2C-36.8,-76.3,-20.3,-77.9,-3.6,-72.2C13.2,-66.5,30.8,-83.5,45.2,-76.3Z;
              M44,-76.3C58.3,-69.2,71.9,-59.3,79.9,-45.8C87.8,-32.3,90.1,-15.1,89.3,1.5C88.6,18.1,84.8,34.6,76.5,48.8C68.1,63,55.1,74.8,40.1,80.7C25.1,86.6,8,86.6,-8,83.7C-24,80.8,-38.9,75,-51.9,65.7C-64.8,56.4,-75.9,43.5,-80.6,28.6C-85.4,13.6,-83.9,-3.5,-79.1,-19C-74.3,-34.6,-66.2,-48.6,-54.4,-57.1C-42.6,-65.6,-27,-68.5,-12.1,-70.1C2.9,-71.7,17.5,-71.9,29.7,-83.3C41.9,-94.8,51.7,-117.5,44,-76.3Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default GlowingBlob;
