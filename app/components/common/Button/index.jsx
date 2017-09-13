import React from 'react';

import styles from '../../../styles/app.css';

export default function Button(props) {

  const handleKeyPress = (event) => {
    // On Enter Press (13), consider it as Button Click
    if (event.which === 13) {
      props.onClick();
    }
  }

  return (
    <button
      className={styles.btn}
      onClick={() => {props.onClick()}}
      onKeyPress={(event) => {handleKeyPress(event)}}>
      {props.text || 'Execute'}
    </button>
  );
}