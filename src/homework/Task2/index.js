import React from "react";
import styles from '../Task2/Task2.module.scss'



export class Task2 extends React.Component{
    constructor(){
        super();
        this.state = {
            firstname: '',
            lastname: '',
            age: '',
            formErrors: {
                firstname: '',
                lastname: '',
                age: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }
    handleInput(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
        });
    }
    sendRequest() {
        if(!this.state.formErrors.firstname && !this.state.formErrors.lastname && !this.state.formErrors.age){
            console.log("submit succes");
        } 
    }
    handleSubmit(e){
            e.preventDefault();
            this.setState(state => ({...state, formErrors: {
                firstname: state.firstname ? '' : 'required',
                lastname: state.lastname ? '' : 'required',
                age: state.age ? '' : 'required',
            }}), this.sendRequest);
    }
    render(){
        return(
            <div className={styles.reg}>
                <form>
                    <h2>Fill info to proceed</h2>
                    <label>First Name</label>
                    <input type="text" name="firstname" onChange={this.handleInput} className={this.state.formErrors.firstname ? styles.error : '' }/>
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={this.handleInput} className={this.state.formErrors.lastname ? styles.error : '' }/>
                    <label>Age</label>
                    <input type="text" name="age" onChange={this.handleInput} className={this.state.formErrors.age ? styles.error : '' }/>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}