import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld, resetWorld, showHelp] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
    state.showHelp,
  ]);

  const reset = () => {
    resetWorld();

    window.localStorage.removeItem("cubes");
  };

  return (
    <div className='container-btn'>
      <button onClick={saveWorld}>
        <span>
          <ion-icon name='save-outline'></ion-icon>
        </span>
      </button>
      <button onClick={reset}>
        <span>
          <ion-icon name='refresh-outline'></ion-icon>
        </span>
      </button>
      <button onClick={showHelp}>
        <span>
          <ion-icon name='help-outline'></ion-icon>
        </span>
      </button>
    </div>
  );
};
