import React from "react";
import { generatePermutations } from "../utils/permutationUtils";

export default function Permutations({ inputString }) {
  const permutations = generatePermutations(inputString);

  return (
    <div>
      <h1>permutation</h1>
      <ul>
        {permutations.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}