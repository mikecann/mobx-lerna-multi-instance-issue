/// <reference types="react" />
import * as React from 'react';
export interface ErrorAlertProps {
    count: number;
}
export declare class MySharedComponent extends React.Component<ErrorAlertProps, any> {
    count: number;
    render(): JSX.Element;
    handleClick: () => number;
}
