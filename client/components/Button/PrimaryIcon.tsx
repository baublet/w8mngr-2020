import * as React from "react";
import BaseButton from "./Base";

export default function PrimaryIconButton(
  props: React.HTMLProps<HTMLButtonElement>
): React.ReactElement<React.HTMLProps<HTMLButtonElement>, any> {
  const newClassNames = `rounded-full p-1 bg-primary color-primaryText
      ${props.className || ""}
    `;
  return <BaseButton {...props} className={newClassNames} />;
}
