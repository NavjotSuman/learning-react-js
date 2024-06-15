const mainContainer = document.querySelector("#root")

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com/",
        target: "_blank",
    },
    children: "Cleck for Goggle",
}

function customReact(reactElement, container) {
    // type of element we want 
    const div = document.createElement(reactElement.type)

    /*
    // inner html of the div element
    div.setAttribute("href", reactElement.props['href'])
    div.setAttribute("target", reactElement.props['target'])

    */

    for (const prop in reactElement.props) {
        div.setAttribute(prop, reactElement.props[prop])
    }
    div.innerHTML = reactElement.children;
    container.append(div);


}

customReact(reactElement, mainContainer)


