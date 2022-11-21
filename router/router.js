import { loginPage } from "../pages/login";
import jwt_decode from "jwt-decode";
import dynamicRoute from "../utils/dynamicRoute";
import { dashboardPage } from "../pages/dashboard";

const router = () => {
  const url = window.location.pathname;

  if (
    localStorage.getItem("token") &&
    localStorage.getItem("token") !== undefined
  ) {
    const decoded = jwt_decode(localStorage.getItem("token"));
    if (decoded.email == "************") {
      switch (url) {
        case "/dashboard":
          dynamicRoute(dashboardPage.render());
          break;
        case "/about":
          dynamicRoute(url);
          break;
        case "/test":
          dynamicRoute(url);
          break;
        default:
          dynamicRoute(dashboardPage.render());
      }
    }
  } else {
    dynamicRoute();
    document.querySelector("#app").innerHTML = `
      <div>
      ${loginPage.render()}
      </div>
    `;
  }
};
export default router;
