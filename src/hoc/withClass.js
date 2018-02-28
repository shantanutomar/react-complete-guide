import React, {Component} from 'react';

var withClass = (ComponentToRender, classes) => {
    return class extends Component {
        render() {
            return(
                <div className = {classes}>
                    <ComponentToRender {...this.props}/>
                </div>
        )};
    };
};

export default withClass;

