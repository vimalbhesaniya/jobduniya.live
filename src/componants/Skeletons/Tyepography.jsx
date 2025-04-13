
import { Skeleton } from "@mui/material";
import React from 'react'

export const Tyepography  =({label="" , loading = false , style = {} ,className , height ,width }) => {
  return (loading  ? <Skeleton variant="rounded" animation="wave" height={height} width={width} /> : <p className={className} style={style}>{label}</p>);
}
