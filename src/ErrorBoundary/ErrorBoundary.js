import React, {Component} from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError:false,
        errorMsg: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMsg: error});

    }

    render(){
        return <h1>ERROR</h1>
    }
}

export default ErrorBoundary