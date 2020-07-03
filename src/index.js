// import "./style.css";

// // import printMe, { cube } from "./print.js";
// import Icon from "./timg.jpeg";

// function component() {
//   var element = document.createElement("div");
//   element.innerHTML = "111112";
//   element.classList.add("hello");

//   var btn = document.createElement("button");
//   btn.innerHTML = "Click me and check th";
//   // btn.onclick = printMe;
//   btn.onclick = (e) =>
//     import(/* webpackChunkName: "print" */ "./print").then((module) => {
//       var print = module.default;

//       print();
//     });
//   element.appendChild(btn);

//   var myIcon = new Image();
//   myIcon.src = Icon;
//   element.appendChild(myIcon);

//   return element;
// }

// document.getElementById("root").appendChild(component());

// if (module.hot) {
//   module.hot.accept("./print.js", function () {
//     console.log("Accepting the updated printMe module!");
//     printMe();
//   });
// }

import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import "antd/dist/antd.less"; // (babel-plugin-import)
import store from "./store";
import Home from "./containers/home";
// import "./index.less";
import style from "./style";
import styleless from "./index.less";

class APP extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Home />
          <h1 className={styleless.hello}>Hello React</h1>
        </BrowserRouter>
      </Provider>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<APP />, document.getElementById("root"));
