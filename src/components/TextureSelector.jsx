import { useEffect } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";
import {
  dirtImg,
  grassImg,
  glassImg,
  logImg,
  woodImg,
  obsidianImg,
  musgoImg,
  diamondImg,
  roseImg,
} from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
  obsidian: obsidianImg,
  musgo: musgoImg,
  diamond: diamondImg,
  rose: roseImg,
};

export const TextureSelector = () => {
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log, obsidian, musgo, diamond, rose } =
    useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log,
      obsidian,
      musgo,
      diamond,
      rose,
    };
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);

    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [dirt, grass, glass, wood, log, obsidian, musgo, diamond, rose]);

  return (
    <div className='container-boxTexture'>
      <p className='name-texture'>{activeTexture}</p>
      <div className='textureSelector'>
        {Object.entries(images).map(([k, src]) => {
          return (
            <img
              key={k}
              src={src}
              alt={k}
              className={`${k === activeTexture ? "active" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
};
