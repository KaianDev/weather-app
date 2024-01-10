import { ComponentProps } from "react";

const Input = ({ ...props }: ComponentProps<"input">) => {
  return (
    <input
      {...props}
      type="text"
      placeholder="Digite o nome de uma cidade"
      className="flex-1 px-2 py-1 border rounded text-sky-800 outline-sky-500 outline-offset-4 "
      autoFocus
    />
  );
};

export default Input;
