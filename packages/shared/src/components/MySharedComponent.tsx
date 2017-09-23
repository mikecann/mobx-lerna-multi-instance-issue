import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

export interface ErrorAlertProps {
    count:number;
}

@observer
export class MySharedComponent extends React.Component<ErrorAlertProps, any> {

    @observable count = 0;

    render() {
        return <div>
            <div>Hello, this is a shared component, passed count is: {this.props.count}</div>
            <div>
                my count is <button onClick={this.handleClick}>Click Me ({this.count})</button>
            </div>
        </div>
    }

    @action handleClick = () => this.count++;
}