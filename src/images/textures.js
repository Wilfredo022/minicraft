import { NearestFilter, TextureLoader, RepeatWrapping } from "three";
import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
  obsidianImg,
  groundImg,
  musgoImg,
  diamondImg,
  roseImg,
} from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(groundImg);
const obsidianTexture = new TextureLoader().load(obsidianImg);
const musgoTexture = new TextureLoader().load(musgoImg);
const diamondTexture = new TextureLoader().load(diamondImg);
const roseTexture = new TextureLoader().load(roseImg);

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
obsidianTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
musgoTexture.magFilter = NearestFilter;
roseTexture.magFilter = NearestFilter;
diamondTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  logTexture,
  groundTexture,
  obsidianTexture,
  musgoTexture,
  diamondTexture,
  roseTexture,
};
