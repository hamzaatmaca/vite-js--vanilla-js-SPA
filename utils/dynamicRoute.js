import { nav } from "../components/nav";
import { footer } from "../components/footer";
const dynamicRoute = (template) => {
  return (document.querySelector("#app").innerHTML = `
      <div>
       ${nav.render()}${template}${footer.render()}
      </div>
    `);
};

export default dynamicRoute;
