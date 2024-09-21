import React from "react";

// Function to generate the points of a polygon with variable side adjustments
const getPolygonPoints = (steps) => {
  const numSides = 5;
  const radius = 40; // Initial radius of the polygon
  const centerX = 50; // Center X of the SVG viewBox
  const centerY = 50; // Center Y of the SVG viewBox

  // Calculate the initial points of the polygon
  const points = [];
  for (let i = 0; i < numSides; i++) {
    const angle = (i * 2 * Math.PI) / numSides;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y });
  }

  // Reverse the steps and adjust each side based on steps
  return points.map((point, index) => {
    const stepFactor = (5 - steps[index]) / 5; // Invert the steps so 0 is at the center and 5 is at the edge
    const moveX = (centerX - point.x) * stepFactor;
    const moveY = (centerY - point.y) * stepFactor;

    return { x: point.x + moveX, y: point.y + moveY };
  });
};

const PolygonGraph = () => {
  // Original steps for each side (values between 0 and 5)
  const skill = [5, 5, 5, 5, 5]; // Example steps
  const stage1 = [1, 1, 1, 1, 1];
  const stage2 = [2, 2, 2, 2, 2];
  const stage3 = [3, 3, 3, 3, 3];
  const stage4 = [4, 4, 4, 4, 4];
  const stage5 = [5, 5, 5, 5, 5];
  // Get the adjusted points based on the steps
  const polygonskillPoints = getPolygonPoints(skill);
  const polygonstage1Points = getPolygonPoints(stage1);
  const polygonstage2Points = getPolygonPoints(stage2);
  const polygonstage3Points = getPolygonPoints(stage3);
  const polygonstage4Points = getPolygonPoints(stage4);
  const polygonstage5Points = getPolygonPoints(stage5);

  // Format the points for the SVG polygon
  const u_skill = polygonskillPoints
    .map((point) => `${point.x},${point.y}`)
    .join(" ");
  const stage_1 = polygonstage1Points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");
  const stage_2 = polygonstage2Points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");
  const stage_3 = polygonstage3Points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");
  const stage_4 = polygonstage4Points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");
  const stage_5 = polygonstage5Points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  // Translation values in CSS
  const translateX = 20; // Horizontal movement
  const translateY = 20; // Vertical movement

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div
        className="w-[450px] h-[450px] ml-40"
        style={{
          transform: `translate(${translateX}px, ${translateY}px)`, // Apply CSS translation
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full ">
          <polygon
            points={u_skill}
            fill="none"
            stroke="#ffffff"
            className="opacity-100 blur-[2px]"
          />
          <polygon
            points={stage_1}
            fill="#ffffff"
            stroke="none"
            className="opacity-10"
          />
          <polygon
            points={stage_2}
            fill="#ffffff"
            stroke="none"
            className="opacity-10"
          />
          <polygon
            points={stage_3}
            fill="#ffffff"
            stroke="none"
            className="opacity-10"
          />
          <polygon
            points={stage_4}
            fill="#ffffff"
            stroke="none"
            className="opacity-10"
          />
          <polygon
            points={stage_5}
            fill="#ffffff"
            stroke="none"
            className="opacity-10"
          />
          <polygon
            points={u_skill}
            fill="none"
            stroke="#ffffff"
            className="opacity-100"
          />
        </svg>
      </div>
      <p className="text-white absolute mb-[200px] ml-[120px] ">transparent</p>
      <p className="text-white absolute mt-[40px] ml-[300px]">love</p>
      <p className="text-white absolute mb-[100px] mr-[180px]">open</p>
      <p className="text-white absolute mt-[280px] ml-[90px]">collaboration</p>
      <p className="text-white absolute mt-[210px] mr-[190px]">flexibility</p>
    </div>
  );
};

export default PolygonGraph;
