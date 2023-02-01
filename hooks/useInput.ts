import { useState } from "react";
import EventType from "types/Event";

type InputErrorHandler = (error: string) => string;

export interface UseInputProps {
  initialValue?: string;
  validate?: (value: string, errorHandler: InputErrorHandler) => string;
  errorHandler?: InputErrorHandler;
}

export default function useInput({
  initialValue = "",
  validate = () => "",
  errorHandler = () => "",
}: UseInputProps) {
  const [input, setInput] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const isError = 0 < errorMessage.length;

  const changeHandler: EventType<"input", "onChange"> = (e) => {
    setInput(e.target.value);
    setErrorMessage(validate(input, errorHandler));
  };

  const handleInputError = (error: string) => {
    setErrorMessage(errorHandler(error));
  };

  const resetValue = () => {
    setInput("");
    setErrorMessage("");
  };

  return {
    input,
    isError,
    errorMessage,
    changeHandler,
    handleInputError,
    resetValue,
  };
}
