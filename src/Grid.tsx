import { Crown } from "./icons/Crown";
import { Piece } from "./Piece"
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

const pieces = [
{x:20,y:450},
{x:250,y:350},
{x:500,y:250},
]

  return (
    <svg
      width="80%"
      height="80%"
      viewBox="0 0 900 900"
      style="background-color: #DDD"
    >
      {/* Grid lines */}
      {gridLines}

      {/* Circle in the center */}
      <circle cx="450" cy="450" r="50" fill="red" />
    
      <For each={pieces}>{(piece, i)=>
   <Piece x={piece.x} y={piece.y} />
}</For>
      {/* Rectangle in the bottom right corner */}
      <rect x="280" y="280" width="50" height="50" fill="blue" />
      <Crown height="150" width="150" />
    </svg>
  );
};
