import Flux from "@4geeksacademy/react-flux-dash";
import Store from "../stores/store.js";
export let addContact = (contact)=>{
    let contacts = Store.getState('contacts');
    if(!contacts) contacts = [contact];
    else contacts.push(contact);
    Flux.dispatchEvent("contacts",contacts);
};