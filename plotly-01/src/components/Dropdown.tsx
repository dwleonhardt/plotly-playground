import * as React from "react";

export const Options  = (props: any) => {
  return (
    <option key={props.i} value={props.currency}>{props.currency}</option>
  )
}