import { ComponentProps } from "react";

const Button = ({ children, ...props }: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="px-3 py-1 border-2 bg-sky-700 uppercase rounded tracking-wide text-sky-100 border-sky-700 hover:bg-sky-300 hover:text-sky-700 transition disabled:bg-slate-500 disabled:border-slate-500 disabled:text-sky-100">
      {children}
    </button>
  );
};

export default Button;
