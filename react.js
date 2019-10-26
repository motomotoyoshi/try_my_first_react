'use strict';

class MyComponent extends React.Component{
    render(){
        return React.createElement('h1', null, 'Hello World')
    }
}

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById('main')
)