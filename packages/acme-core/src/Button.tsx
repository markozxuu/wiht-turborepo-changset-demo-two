import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  demo: string;
}

export function Button(props: ButtonProps) {
  return <button>
    {props.children}
    {props.demo}
    </button>;
}

Button.displayName = "Button";
