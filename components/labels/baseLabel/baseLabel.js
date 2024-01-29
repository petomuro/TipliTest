import { mapColorToCSSVariable } from "/assets/js/utils.js";

class BaseLabel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  static get observedAttributes() {
    return ["text-color", "font"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);

    if (name === "text-color" && oldValue !== newValue) {
      this.setColor(newValue);
    } else if (name === "font" && oldValue !== newValue) {
      this.setFont(newValue);
    }
  }

  setGlobal() {
    const label = this.shadowRoot.querySelector("span");
    label.classList.remove("label");
    label.classList.add("label");
  }

  setColor(color) {
    const label = this.shadowRoot.querySelector("span");

    if (color) {
      label.style.color = mapColorToCSSVariable(color);
    }
  }

  setFont(font) {
    const label = this.shadowRoot.querySelector("span");

    if (font) {
      label.style.font = font;
    }
  }

  setText(text) {
    const label = this.shadowRoot.querySelector("span");
    label.innerHTML = text;
  }

  render() {
    const textColor = this.getAttribute("text-color") || "black";
    const font = this.getAttribute("font") || "";
    const labelText = this.getAttribute("label-text") || "";
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/components/labels/baseLabel/baseLabel.css");

    const label = document.createElement("span");
    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(label);

    this.setGlobal();
    this.setColor(textColor);
    this.setFont(font);
    this.setText(labelText);
  }
}

customElements.define("base-label", BaseLabel);
