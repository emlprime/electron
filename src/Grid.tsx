import { Crown } from "./icons/Crown";

export const Grid = () => {
  const gridSize = 9;
  const gridUnit = 900 / gridSize;

  const gridLines = [];
  for (let i = 1; i < gridSize; i++) {
    const x1 = i * gridUnit;
    const y1 = 0;
    const x2 = i * gridUnit;
    const y2 = 900;
    gridLines.push(
      <line
        key={`vertical-${i}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="white"
        strokeWidth="1"
      />,
    );

    const x3 = 0;
    const y3 = i * gridUnit;
    const x4 = 900;
    const y4 = i * gridUnit;
    gridLines.push(
      <line
        key={`horizontal-${i}`}
        x1={x3}
        y1={y3}
        x2={x4}
        y2={y4}
        stroke="white"
        strokeWidth="1"
      />,
    );
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 900 900"
      style="background-color: #222"
    >
      {/* Grid lines */}
      {gridLines}

      {/* Circle in the center */}
      <circle cx="450" cy="450" r="50" fill="red" />

      {/* Rectangle in the bottom right corner */}
      <rect x="280" y="280" width="50" height="50" fill="blue" />
      <Crown height="150" width="150" />
    </svg>
  );
};
