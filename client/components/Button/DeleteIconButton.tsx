import * as React from "react";
import GhostButton from "./Ghost";
import CloseIcon from "../Icons/Close";

export default function DeleteIconButton(
  props: React.HTMLProps<HTMLButtonElement>
): React.ReactElement<React.HTMLProps<HTMLButtonElement>, any> {
  const { onClick, ...newProps } = props,
    newOnclick = (e: any) => {
      e.preventDefault();
      if (window.confirm("Are you sure?")) {
        onClick(e);
      }
    };
  return (
    <GhostButton
      {...newProps}
      className={`bg-transparent p-3 text-foreground rounded text-xs hover:bg-foregroundSlight focus:bg-foregroundSlight ${props.className ||
        ""}`}
      onClick={newOnclick}
    >
      <span className="screen-reader-text">Delete</span>
      <CloseIcon />
    </GhostButton>
  );
}
