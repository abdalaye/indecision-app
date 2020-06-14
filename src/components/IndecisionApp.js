import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick = () => {
        let randomNum = Math.floor(Math.random() * this.state.options.length);

        alert(this.state.options[randomNum]);
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > - 1) {
            return 'This option already exists';
        }


        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    //COMPONENT FOR LIFECYCLE
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //Lorsque y a erreur
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //Save Data for each update
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("Avant de quitter le component");
    }

    render() {
        return (
            <div>
                <Header />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}    
                />
            </div>
        );
    }
}

export default IndecisionApp;