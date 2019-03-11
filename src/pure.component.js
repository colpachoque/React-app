'use strict';

class PureComponent extends React.PureComponent {
    render() {
        return (<div>Pure component is here</div>)
    }
}

const c = document.querySelector('#react_app_pure_component');
ReactDOM.render(<PureComponent></PureComponent>, c);