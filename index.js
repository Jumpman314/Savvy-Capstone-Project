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
  addNavEventListeners();
  addNavToggle();
  addPicOnFormSubmit();
  router.updatePageLinks();
}
render(state.Home);

function addNavEventListeners() {
  document.querySelectorAll("nav a").forEach(navLink => {
    navLink.addEventListener("click", event => {
      event.preventDefault();
      // render(state[event.target.textContent]); <--- One Line Version!
      let selectedPage = event.target.textContent;
      let pieceOfState = state[selectedPage];
      render(pieceOfState);
    });
  });
}
//addNavEventListeners();

// add menu toggle to bars icon in nav bar
function addNavToggle() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

function addPicOnFormSubmit() {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    let inputs = event.target.elements;
    let newPic = {
      url: inputs[0].value,
      title: inputs[1].value
    };
    state.Gallery.pictures.push(newPic);
    render(state.Gallery);
  });
}

// array of pictures for gallery
// const superFoodPics = [
//   {
//     url:
//       "https://images.unsplash.com/photo-1535227798054-e4373ef3795a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=744&q=80",
//     title: "Image of healthy food"
//   },
//   {
//     url:
//       "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     title: "sunglass doggo"
//   }
// ];

// populating gallery with pictures
// const superFoods = document.querySelector("#gallery");
// superFoodPics.forEach(pic => {
//   let img = document.createElement("img");
//   img.src = pic.url;
//   img.alt = pic.title;
//   superFoods.appendChild(img);
// });

// // handle form submission
// document.querySelector("form").addEventListener("submit", event => {
//   event.preventDefault();
//   Array.from(event.target.elements).forEach(el => {
//     console.log("Input Type: ", el.type);
//     console.log("Name: ", el.name);
//     console.log("Value: ", el.value);
//   });
// });
