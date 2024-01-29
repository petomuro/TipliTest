import {
  changeInfoContainerBaseLabelTextColor,
  changeListItemFont,
  changeTextSectionTitleFont,
} from "./utils.js";

const maxWidth = window.matchMedia("(max-width: 640px)");

changeTextSectionTitleFont(maxWidth);
changeListItemFont(maxWidth);
changeInfoContainerBaseLabelTextColor(maxWidth);

maxWidth.addEventListener("change", function () {
  changeTextSectionTitleFont(maxWidth);
  changeListItemFont(maxWidth);
  changeInfoContainerBaseLabelTextColor(maxWidth);
});
