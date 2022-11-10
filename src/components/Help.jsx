import React from "react";
import { useStore } from "../hooks/useStore";

export const Help = () => {
  const [hiddenHelp] = useStore((state) => [state.hiddenHelp]);
  return (
    <div className='help__container'>
      <h2>Instructions to play</h2>

      <div className='help__keys'>
        <h4>keys</h4>
        <p>{"W > walk forward"}</p>
        <p>{"S > Walk backwards"}</p>
        <p>{"D > right"}</p>
        <p>{"A > Left"}</p>
        <p>{"Space > Jump"}</p>
        <p>{"Alt + click > Remove cube selected"}</p>
        <p>{"click > Add cube"}</p>
        <p>{"Number 1 - 9 > Change texture"}</p>
      </div>

      <div className='help__cursor'>
        <h4>Cursor</h4>
        <p>
          If you want to see the sides with the mouse, you must click as close
          to the (+) that is in the middle of the screen
        </p>
        <p>ESC to exit mouse view</p>
      </div>

      <button onClick={hiddenHelp} className='close'>
        x
      </button>
    </div>
  );
};
