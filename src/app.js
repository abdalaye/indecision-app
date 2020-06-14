import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Hello</h1>
    </div>
);

ReactDOM.render((
    <Layout>
        {template}
    </Layout>
), document.getElementById('app'));