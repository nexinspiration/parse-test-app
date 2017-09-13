import React from 'react';

const className = {
  width: '100%',
  padding: '5px 12px',
  height: '21px',
  border: '1px solid #ccc',
  borderRadius: '2px',
  fontSize: '15px'
};

export default function Input(props) { 
  let inputStyle = Object.assign(className, props.className || {});

  return (
    <input
     style={inputStyle}
     value={props.text}
     onChange={(event) => {props.onChange(event.target.value)}}
    />
  );
}