import React from "react";
import { ReactComponent as AddIcon } from '../../icons/add.svg'

export const Icons = ({ name, className, size }) => {
  if (name === "add")
    return <AddIcon className={className} width={size} height={size} />
  // if (name === 'delete')
    // return <DeleteIcon ...
}