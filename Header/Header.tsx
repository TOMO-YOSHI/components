import React from 'react';

interface Props {
  text: string
}

export default function Header({ text }: Props) {
  return (
    <div>{text}!!!!!</div>
  )
}
