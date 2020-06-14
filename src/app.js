import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

//IMPORTANCE DE transform-class-properties
class oldSyntax {
    constructor() {
        this.name= 'OldSyntaxe';
        this.getGretting = this.getGretting.bind(this)
    }

    getGretting() {
        return `Hello my name is ${this.name}`;
    }
}

const old = new oldSyntax();

console.log(old.name);
const getGretting = old.getGretting;
console.log(getGretting());

class newSyntax {
    name = "New syntaxe";

    getGretting = () => {
        return `Hello my name is ${this.name}`;
    }
}

const newsyn= new newSyntax();

console.log(newsyn.name);
const newgetGretting = newsyn.getGretting;
console.log(newgetGretting());