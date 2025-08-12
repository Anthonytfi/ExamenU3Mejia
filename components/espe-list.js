class EspeList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.careers = [
      {name: 'Ingeniería en Sistemas', desc: 'Formación en desarrollo de software y sistemas.'},
      {name: 'Ingeniería Electrónica', desc: 'Diseño y mantenimiento de circuitos electrónicos.'},
      {name: 'Administración de Empresas', desc: 'Gestión y administración de organizaciones.'},
      {name: 'Medicina', desc: 'Formación en ciencias de la salud y cuidado del paciente.'}
    ];
    this._filterText = '';
  }

  set filterText(value) {
    this._filterText = value;
    this.render();
  }

  get filterText() {
    return this._filterText;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const filtered = this.careers.filter(c =>
      c.name.toLowerCase().includes(this._filterText) ||
      c.desc.toLowerCase().includes(this._filterText)
    );

    this.shadowRoot.innerHTML = `
      <style>
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1em;
        }
      </style>
      <div class="list">
        ${filtered.map(c => `
          <espe-card title="${c.name}" desc="${c.desc}"></espe-card>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('espe-list', EspeList);
