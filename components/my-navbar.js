class MyNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #004d99;
          color: white;
          padding: 1em;
          display: flex;
          gap: 1em;
          user-select: none;
        }
        a {
          color: white;
          cursor: pointer;
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
      <nav>
        <a id="inicio" href="#">Inicio</a>
        <a id="sobre" href="#">Sobre la ESPE</a>
        <a id="oferta" href="#">Oferta Académica</a>
        <a id="admisiones" href="#">Proceso de Admisión</a>
        <a id="contacto" href="#">Contacto</a>
      </nav>
    `;

    this.shadowRoot.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = e.target.id;
        this.dispatchEvent(new CustomEvent('navchange', {
          detail: sectionId,
          bubbles: true,
          composed: true
        }));
      });
    });
  }
}

customElements.define('my-navbar', MyNavbar);
