'use strict';
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Maria" />;
const c = document.querySelector('#react_app_functional_component');
ReactDOM.render(element, c);