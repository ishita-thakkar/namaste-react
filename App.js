const heading = React.createElement("h1", {}, "Hellow world from React!")
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement("div",{}, 
        [
            React.createElement("h1", {}, "I'm an h1 tag"), 
            React.createElement("h1", {}, "I'm an h22 tag")
        ]
        )
    )
)
root.render(parent);