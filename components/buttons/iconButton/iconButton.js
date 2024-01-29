class IconButton extends HTMLElement {
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
    const validStyles = ["button-outline-transparent"];

    button.classList.remove(...validStyles);

    if (validStyles.includes(style)) {
      button.classList.add(style);
    }
  }

  setImage(alt, src) {
    const button = this.shadowRoot.querySelector("button");
    const img = document.createElement("img");
    img.alt = alt;
    img.src = src;

    button.appendChild(img);
  }

  setAction(action) {
    const actionFunction = new Function(action);
    this.addEventListener("click", actionFunction);
  }

  render() {
    const buttonStyle =
      this.getAttribute("button-style") || "button-outline-transparent";
    const imageAlt = this.getAttribute("image-alt") || "";
    const imageSrc = this.getAttribute("image-src") || "";
    const buttonAction = this.getAttribute("button-action");

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/components/buttons/iconButton/iconButton.css");

    const button = document.createElement("button");
    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(button);

    this.setGlobal();
    this.setStyle(buttonStyle);
    this.setImage(imageAlt, imageSrc);
    this.setAction(buttonAction);
  }
}

customElements.define("icon-button", IconButton);
