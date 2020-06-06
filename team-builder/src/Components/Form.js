import React, { useState } from "react"

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    })

    const changeHandler = i => {
        setMember({ ...member, [i.target.name]: i.target.value })
    }

    const submitForm = i => {
        i.preventDefault()
        props.addNewMember(member)
        setMember({ name: "", email: "", role: "" })
    }

    return (
        <form onSubmit={submitForm}>

            <div className="formContainer">

                <div className="formRow">

                    <div className="formColumn">

                    <label htmlFor='name'>Team Member</label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Name'
                        onChange={changeHandler}
                        value={member.name}
                    />

                    </div>

                    <div className="formColumn">

                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        name='email'
                        type='text'
                        placeholder='Email'
                        onChange={changeHandler}
                        value={member.email}
                    />

                    </div>

                    <div className="formColumn">

                    <label htmlFor='role'>What I do</label>
                    <input
                        id='role'
                        name='role'
                        type='text'
                        placeholder='Role'
                        onChange={changeHandler}
                        value={member.role}
                    />

                    </div>

                </div>

                <div className="formRow">

                <button type='submit'>Add Team Member</button>

                </div>

            </div>

        </form>

        
    )
}

export default Form