import "./style.css";
import deepfry from "./img/deepfry.png";

const kuva = document.querySelector<HTMLImageElement>("#kuva");

if (kuva) {
  kuva.src = deepfry;
}
