'use strict';

class Cmp extends React.Component {
    render() {
        return (<div>AAAAA!</div>)
    }
}

const c = document.querySelector('#react_app_component');
ReactDOM.render(<Cmp></Cmp>, c);