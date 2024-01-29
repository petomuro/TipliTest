class BaseInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  setGlobal() {
    const input = this.shadowRoot.querySelector("input");
    input.classList.remove("input");
    input.classList.add("input");
  }

  setStyle(style) {
    const input = this.shadowRoot.querySelector("input");
    const validStyles = ["input-outline-transparent"];

    input.classList.remove(...validStyles);

    if (validStyles.includes(style)) {
      input.classList.add(style);
    }
  }

  setSize(size) {
    const input = this.shadowRoot.querySelector("input");
    const validSizes = ["input-large"];

    input.classList.remove(...validSizes);

    if (validSizes.includes(size)) {
      input.classList.add(size);
    }
  }

  setPlaceholder(placeholder) {
    const input = this.shadowRoot.querySelector("input");
    input.placeholder = placeholder;
  }

  render() {
    const inputStyle =
      this.getAttribute("input-style") || "input-outline-transparent";
    const inputSize = this.getAttribute("input-size") || "input-large";
    const inputPlaceholder = this.getAttribute("input-placeholder") || "";

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/components/inputs/baseInput/baseInput.css");

    const input = document.createElement("input");
    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(input);

    this.setGlobal();
    this.setStyle(inputStyle);
    this.setSize(inputSize);
    this.setPlaceholder(inputPlaceholder);
  }
}

customElements.define("base-input", BaseInput);
