import { FetchData } from "../utils/fetch";

class Footer {
  constructor() {}

  #template() {
    return `
    <div class="container">
       <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; attmacah - hamzaatmaca.net</p>

          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="/dashboard" class="nav-link px-2 text-muted">Dashboard</a></li>
          </ul>
        </footer>
      <div>
    `;
  }

  #handlePayload() {
    window.addEventListener("DOMContentLoaded", (event) => {});
  }

  render() {
    this.#handlePayload();

    return this.#template();
  }
}

const footer = new Footer();
export { footer };
