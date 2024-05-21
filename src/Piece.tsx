import { Crown } from "./icons/Crown";
import { Hat } from "./icons/Hat";

export const Piece = ({ x, y, owner = "Adan" }) => {
  console.log("owner", owner);
  return owner === "Zak" ? (
    <svg x={x} y={y}>
      <Hat height={50} width={50} />
    </svg>
  ) : (
    <svg x={x} y={y}>
      <Crown height={50} width={50} />
    </svg>
  );
};
