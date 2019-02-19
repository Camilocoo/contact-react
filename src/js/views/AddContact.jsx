import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import * as actions from "../actions/actions.js";
import Store from "../stores/store.js";

export default class Contacts extends Flux.DashView {
    constructor(){
        super();
        this.state={
          full_name:""  
        };
    }
     componentDidMount(){
     this.subscribe(Store,"contacts", (contacts)=>{
         this.props.history.push('/');
         });
    }
    
    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">Add a new contact</h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="Full Name" onChange={(e)=>this.setState({
                                full_name:e.target.value
                            })} />
                        </div>
                        <button type="button" className="btn btn-primary form-control"onClick={()=>actions.addContact({full_name:this.state.full_name})}>save</button>
                        <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        );
    }
}