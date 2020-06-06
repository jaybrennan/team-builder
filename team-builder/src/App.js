import React, { useState } from "react"
import Form from "./Components/Form"
import Member from "./Components/Member"
import styled from 'styled-components'
import data from "./data"
import "./App.css"
import "./Form.css"

function App() {
    const [members, setMembers] = useState(data)

    const addNewMember = member => {
        setMembers([...members, member])
    }

    const FormContainer = styled.div`
    border: 1px solid white;
    border-radius: 1rem;
    padding: 2rem;
    `



    return (
        <div className='App'>
            <header className='App-header'>
                <h2>Team Members</h2>
                <FormContainer>
                    <Form addNewMember={addNewMember} />
                    <Member memberList={members} />
                </FormContainer>
            </header>
        </div>
    )
}

export default App