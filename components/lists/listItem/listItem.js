import { mapColorToCSSVariable } from "/assets/js/utils.js";

class ListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const iconAlt = this.getAttribute("icon-alt") || "";
    const iconSrc = this.getAttribute("icon-src") || "";
    const textColor = this.getAttribute("text-color") || "black";
    const font = this.getAttribute("font") || "";
    const textContent = this.getAttribute("text-content") || "";

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/components/lists/listItem/listItem.css");

    const listItem = document.createElement("div");
    listItem.classList.remove("list-item");
    listItem.classList.add("list-item");

    const icon = document.createElement("img");
    icon.alt = iconAlt;
    icon.src = iconSrc;

    const label = document.createElement("span");
    label.style.color = mapColorToCSSVariable(textColor);
    label.style.font = font;
    label.innerHTML = textContent;

    listItem.appendChild(icon);
    listItem.appendChild(label);

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(listItem);
  }
}

customElements.define("list-item", ListItem);
