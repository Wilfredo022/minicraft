import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
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
    </div>
  );
};
