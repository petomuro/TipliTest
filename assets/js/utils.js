export function mapColorToCSSVariable(colorName) {
  const colorMap = {
    $green: "#61a60e",
    $orange: "#ec7700",
    "$orange-dark": "#e45d13",
    "$grey-0": "#54565a",
    "$grey-1": "#aeaeae",
    "$grey-2": "#47566e",
    "$grey-3": "#d9d9d9",
  };

  return colorMap[colorName] || colorName;
}

export function changeTextSectionTitleFont(maxWidth) {
  let newFont = maxWidth.matches
    ? "bold 30px Roboto, sans-serif"
    : "bold 48px Roboto, sans-serif";

  const baseLabel = document.getElementById("text-section-title");
  baseLabel.setAttribute("font", newFont);
}

export function changeListItemFont(maxWidth) {
  let newFont;
  newFont = maxWidth.matches
    ? "bold 16px Roboto, sans-serif"
    : "bold 20px Roboto, sans-serif";

  const listItems = document.getElementsByTagName("list-item");

  for (let listItem of listItems) {
    listItem.setAttribute("font", newFont);
  }
}

export function changeInfoContainerBaseLabelTextColor(maxWidth) {
  let newColor = maxWidth.matches ? "$green" : "white";

  const baseLabel = document.getElementById("info-container-text");
  baseLabel.setAttribute("text-color", newColor);
}
