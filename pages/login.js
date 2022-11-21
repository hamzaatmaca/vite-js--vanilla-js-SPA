import brain from "../public/img/brain.jpg";
import { FetchData } from "../utils/fetch";
import jwt_decode from "jwt-decode";

class Login {
  constructor() {}
  #services(payload) {
    FetchData("login", payload, "POST")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.message);

        var decoded = jwt_decode(data.token);

        if (decoded.email === "***********") {
          localStorage.setItem("token", data.token);
          window.location.pathname = "dashboard";
        }
      });
  }
  #template() {
    return `
        <section class="vh-100">
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-3">
                <img src="${brain}"
                  class="img-fluid" alt="Sample image">
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>

                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0">Login - Attmacah - Systems</p>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input type="email"  id="email" class="form-control form-control-lg"
                      placeholder="Enter a valid email address" />
                    
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-3">
                    <input type="password" id="password" class="form-control form-control-lg"
                      placeholder="Enter password" />
                    
                  </div>

        

                  <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" id="confirm" class="btn btn-primary btn-lg"
                      style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </section>
    `;
  }

  #handlePayload() {
    window.addEventListener("DOMContentLoaded", (event) => {
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const confirm = document.getElementById("confirm");
      confirm.addEventListener("click", () => {
        const payload = {
          email: email.value,
          password: password.value,
        };
        this.#services(payload);
      });
    });
  }

  render() {
    this.#handlePayload();

    return this.#template();
  }
}

const loginPage = new Login();
export { loginPage };
