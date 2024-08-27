"use client";

import { useState, useRef, Dispatch, SetStateAction } from "react";

export default function PrettyText({
  type,
  name,
  label,
  min,
  max,
  input,
  setInput,
  height,
  width,
}: {
  type: string;
  name: string;
  label: string;
  min: number;
  max: number;
  input: any;
  setInput: Dispatch<SetStateAction<any>>;
  height: string;
  width: string;
}) {
  const [focus, setFocus] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleBlur = () => {
    if (!input && inputRef.current) {
      inputRef.current.value = "";
    }
    setFocus(false);
  };

  return (
    <div className={`${height} ${width} relative`}>
      <textarea
        className="textarea-wrapper"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={handleBlur}
        ref={inputRef}
        value={input || ""}
        required
      />
      <label
        className={`input-label-text ${
          !focus && input
            ? "input-label-focus-none"
            : focus
            ? "input-label-focus"
            : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
}

{
  /* <div className={`${height} ${width} relative`}>
      <input
        className="input-wrapper"
        type={type}
        name={name}
        min={type === "number" ? min : undefined}
        max={type === "number" && max !== 0 ? max : undefined}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={handleBlur}
        ref={inputRef}
        value={input || ""}
        required
      />
      <label
        className={`input-label ${
          !focus && input
            ? "input-label-focus-none"
            : focus
            ? "input-label-focus"
            : ""
        }`}
      >
        {label}
      </label>
    </div> */
}
