import React from "react";
import styles from '../Task1/Task1.module.scss'

export class Task1 extends React.Component{
    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div className={styles.reg}>
                <form>
                    <h2>Fill info to proceed</h2>
                    <label>First Name</label>
                    <input type="text" name="firstname"/>
                    <label>Last Name</label>
                    <input type="text" name="lastname"/>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}