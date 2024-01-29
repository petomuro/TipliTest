class BaseButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  setGlobal() {
    const button = this.shadowRoot.querySelector("button");
    button.classList.remove("button");
    button.classList.add("button");
  }

  setStyle(style) {
    const button = this.shadowRoot.querySelector("button");
    const validStyles = ["button-solid-orange", "button-outline-transparent"];

    button.classList.remove(...validStyles);

    if (validStyles.includes(style)) {
      button.classList.add(style);
    }
  }

  setSize(size) {
    const button = this.shadowRoot.querySelector("button");
    const validSizes = ["button-small", "button-large"];

    button.classList.remove(...validSizes);

    if (validSizes.includes(size)) {
      button.classList.add(size);
    }
  }

  setLabel(label) {
    const button = this.shadowRoot.querySelector("button");
    button.innerHTML = label;
  }

  setAction(action) {
    const actionFunction = new Function(action);
    this.addEventListener("click", actionFunction);
  }

  render() {
    const buttonStyle =
      this.getAttribute("button-style") || "button-solid-orange";
    const buttonSize = this.getAttribute("button-size") || "button-small";
    const buttonLabel = this.getAttribute("button-label") || "";
    const buttonAction = this.getAttribute("button-action");

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/components/buttons/baseButton/baseButton.css");

    const button = document.createElement("button");
    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(button);

    this.setGlobal();
    this.setStyle(buttonStyle);
    this.setSize(buttonSize);
    this.setLabel(buttonLabel);
    this.setAction(buttonAction);
  }
}

customElements.define("base-button", BaseButton);
