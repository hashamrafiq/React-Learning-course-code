function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  for (const prop in reactElement.props) {
    domElement.setAttribute("href", reactElement.props[prop]);

    // const element = object[key];
  }
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  Children: "click on this link for visit the google",
};
const maincontainer = document.getElementById("root");
customRender(reactElement, maincontainer);
