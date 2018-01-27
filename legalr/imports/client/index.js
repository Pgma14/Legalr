/* This file can be used to make the static 'main.html' page into a react component to use with React-Router.
 However, due to potential security concerns I will not use it at this time. 


 import React, { Component } from 'react';


const htmlFile = require('../../client/index.html');

export default class index extends React.Component {
    render() {
        return (<div dangerouslySetInnerHTML={{ __html: htmlFile}}></div>)
    }
}
*/
