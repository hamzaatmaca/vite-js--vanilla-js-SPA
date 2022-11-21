import { FetchData } from "../utils/fetch";

class Dashboard {
  constructor() {}
  #services(payload) {
    FetchData("login", payload, "POST")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
      });
  }
  #template() {
    return `<div class="layout_template">dashboard</div>`;
  }

  #handlePayload() {
    window.addEventListener("DOMContentLoaded", (event) => {});
  }

  render() {
    this.#handlePayload();

    return this.#template();
  }
}

const dashboardPage = new Dashboard();
export { dashboardPage };
