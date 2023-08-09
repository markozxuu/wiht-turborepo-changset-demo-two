import React from 'react'

export interface LinkProps {
    name: string;
    path: string;
    color?: string;
}

export const Link = ({ name, path }: LinkProps) => (
  <a href={path}>{name}</a>  
)

