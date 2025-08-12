class EspeCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Carrera';
    const desc = this.getAttribute('desc') || 'Descripción breve';

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          padding: 1em;
          border-radius: 5px;
          width: 250px;
          background: white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          box-sizing: border-box;
        }
        h3 {
          margin-top: 0;
        }
      </style>
      <div class="card">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `;
  }
}

customElements.define('espe-card', EspeCard);
