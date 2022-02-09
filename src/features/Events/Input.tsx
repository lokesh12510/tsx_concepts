import React from "react";
import { useEffect, useRef } from "react";

interface InputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      type="text"
      name="name"
      id="name"
      value={props.value}
      onChange={props.handleChange}
      ref={inputRef}
    />
  );
};

export default Input;
