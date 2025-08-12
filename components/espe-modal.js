class EspeModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: none;
          justify-content: center;
          align-items: center;
        }
        .backdrop[open] {
          display: flex;
        }
        .modal {
          background: white;
          padding: 1em;
          border-radius: 5px;
          max-width: 400px;
          width: 90%;
          box-sizing: border-box;
        }
        button {
          margin-top: 1em;
          padding: 0.5em 1em;
        }
      </style>
      <div class="backdrop" id="backdrop">
        <div class="modal">
          <slot></slot>
          <button id="closeBtn">Cerrar</button>
        </div>
      </div>
    `;

    this.backdrop = this.shadowRoot.getElementById('backdrop');
    this.shadowRoot.getElementById('closeBtn').addEventListener('click', () => {
      this.close();
    });
  }

  open() {
    this.backdrop.setAttribute('open', '');
  }

  close() {
    this.backdrop.removeAttribute('open');
  }
}

customElements.define('espe-modal', EspeModal);
