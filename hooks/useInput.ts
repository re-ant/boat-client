import { useState } from "react";
import EventType from "types/event";

export default function useInput(initialValue: string = "") {
  const [input, setInput] = useState(initialValue);

  const changeHandler: EventType<"input", "onChange"> = (e) => {
    setInput(e.target.value);
  };

  return { input, changeHandler };
}
