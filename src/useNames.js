import { useState } from "react";

export default function useNames(passedNames) {
  const [names, setNames] = useState(passedNames);
  
  const addName = (input) => {
    let newNames = [...names, input];
    console.log(newNames);
    setNames(newNames);
}

  return [names, addName];
}