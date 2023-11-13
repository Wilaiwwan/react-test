import React from "react";
import { findOddInt } from "../utils/findtheOddIntUtils";

export default function FindTheOddInt({ inputIntList }) {
  const findTheOddInt = findOddInt(inputIntList);
  // console.log(findTheOddInt.length);
  return (
    <div>
      <h1>find the odd int</h1>
      <dd>result = {findTheOddInt[0] ? findTheOddInt[0] : "-"}</dd>
    </div>
  );
}
