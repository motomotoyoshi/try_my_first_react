'use strict';

class MyComponent extends React.Component{
    render(){
        return React.createElement(
            'input',
            {
                type: 'text',
                placeholder: 'input value',
                onKeyPress: (e) => {
                    if(e.key === 'Enter' && e.target.value) alert(e.target.value)
                }
            }
        )
    }
}

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById('main')
);