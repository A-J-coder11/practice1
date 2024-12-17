const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im a h1 tag"),
    React.createElement("h2", {}, "im a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im a h1 tag"),
    React.createElement("h2", {}, "im a h2 tag"),
  ])
);

console.log(parent);

// const heading = React.createElement("h2", {}, "hi this is Anand ");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
