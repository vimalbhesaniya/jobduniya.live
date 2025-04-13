import { CircularProgress, Skeleton } from "@mui/material";
import React from "react";

export const Button = ({
  label = "",
  loading = true,
  style = {},
  className,
  onClick,
  height,
  width
}) => {
  return (
    loading ? (
     <Skeleton variant="rounded" animation="wave" height={height} width={width} /> 
    ) : (
      <button onClick={onClick} style={{ ...style }} className={className}>
        {label}
      </button>
    )
  ) 
};
