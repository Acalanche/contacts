import React, {useState} from "react";
const AddContact = (props)=>{
const [newConctac, setNewContact] = useState(
    { name:"",
      email:""
     });

     const add =(event) =>{
        event.preventDefault()
        if(newConctac.name===''| newConctac.email===''){
            alert("PLease fill all the fields.");
        };
        props.AddContactHandler(newConctac);
        setNewContact({name:"",
        email:""
        });
                                };

    return (
<div className="ui main">
    <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
            <div className="field">
                <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={newConctac.name} onChange={(event)=>{
                        setNewContact({
                            ...newConctac,
                            name:event.target.value
                        });
                    }}/>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" value={newConctac.email} onChange={(event)=>{
                        setNewContact({
                            ...newConctac,
                            email:event.target.value
                        });
                    }}/>
            </div>
            <button className="ui button blue">Add</button>
        </form>
</div>
            );
};
export default AddContact;