class EspeFilter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        input {
          width: 100%;
          padding: 0.5em;
          font-size: 1em;
          box-sizing: border-box;
          margin-bottom: 1em;
        }
      </style>
      <input type="text" placeholder="Filtrar carreras..." />
    `;

    this.shadowRoot.querySelector('input').addEventListener('input', e => {
      this.dispatchEvent(new CustomEvent('filterchange', {
        detail: e.target.value.toLowerCase(),
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('espe-filter', EspeFilter);
