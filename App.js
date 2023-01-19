const head = React.createElement(
"h1",
{
    "id" : "title",
    "className" : "reactjs"
},  "Hello Everyone From React heading 1...!!!");

const head1 = React.createElement(
"h2",
{
    "id" : "title1",
    "className" : "reactjs"
},  "Hello Everyone From React heading 2...!!!");

const container = React.createElement("div",{
    "id" : "container"
}, [head,head1]);
//console.log(head);
const reactroot = ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(container);