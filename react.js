'use strict';

class MyComponents extends React.Component{
    constructor(props, context, updater){
        super(props, context, updater);
        this.state = {count: 0};
    }
    render(){
        return [
            React.createElement(
                'input',
                {
                    type: 'text',
                    onChange: (e) => this.setState({count: e.target.value.length})
                },
            ),
            React.createElement('span', null, this.state.count),
        ]
    }
}

ReactDOM.render(
    React.createElement(MyComponents),
    document.getElementById('main')
);