import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
// import axios from "axios";
// import {makeAPI} from './components/views/Bio'
const router = new Navigo(window.location.origin);
router
  .on({
    ":page": params => render(state[params.page]),
    "/": () => render(state.Home)
  })
  .resolve();
function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(st)}
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer()}
      `;
  router.updatePageLinks();
}
render();
