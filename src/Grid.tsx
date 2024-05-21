import * as R from "ramda";
import { Crown } from "./icons/Crown";
import { Piece } from "./Piece";
export const Grid = ({ boards = [] }) => {
  const pieces = R.pipe(
    R.head,
    R.defaultTo({}),
    R.propOr([], "Pieces"),
    R.map(R.pick(["x", "y", "owner"])),
    R.map(({ x, y, owner }) => ({ x: x * 100, y: y * 100, owner })),
  )(boards);
  console.log("pieces", pieces);
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
      width="80%"
      height="80%"
      viewBox="0 0 900 900"
      style="background-color: #DDD"
    >
      {/* Grid lines */}
      {gridLines}

      {/* Circle in the center */}

      <For each={pieces}>
        {(piece, i) => <Piece x={piece.x} y={piece.y} owner={piece.owner} />}
      </For>
    </svg>
  );
};
