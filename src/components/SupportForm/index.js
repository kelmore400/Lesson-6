import React from 'react';
import { render } from 'react-dom';
import { Control } from '../Control/index';
import styles from '../SupportForm/SupportForm.module.scss';

export class SupportForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            comment: ''
        }
    }
handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    });
}

handleSubmit = (event) => {
    event.preventDefault();
    alert('UserName is: ' + this.state.userName + ', comment: ' + this.state.comment);
}

render(){
    return (
        <div className={styles.container}>
            <h2>Please write your request</h2>
            <form onSubmit={this.handleSubmit}>
                <Control inputType='input' labelText='Username' type='text' name='userName' onChange={this.handleInputChange} required/>
                <Control inputType='textarea' labelText='Comment' name='comment' onChange={this.handleInputChange} required/>
                <button className={styles.submitBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
            </form>
        </div>
    )
}
}