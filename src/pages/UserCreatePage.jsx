import React, {useState} from 'react'
import NavButton from '../components/NavButton'

export default function UserCreate() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [organisationKind, setOrganisationKind] = useState("")
    const [organisationName, setOrganisationName] = useState("")

   function handleOnSubmit(e) {
        e.preventDefault()
        const payload = {email, password, firstName, lastName, organisationKind, organisationName}
        const url = "https://frebi.willandskill.eu/auth/users/"
    
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            
        })
    }

    function renderInput(type, value, setValue, placeholder) {
        return (
            <input
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder} />
        )
    }

    return (
        <div>
            <h2> Create user </h2>
            <form onSubmit={handleOnSubmit}>
                {renderInput("text", email, setEmail, "Email")}
                {renderInput("text", firstName, setFirstName, "Firstname")}
                {renderInput("text", lastName, setLastName, "Lastname")}
                {renderInput("password", password, setPassword, "Password")}
                {renderInput("text", organisationKind, setOrganisationKind, "Organisation kind")}
                {renderInput("text", organisationName, setOrganisationName, "Organisation name")}
                <NavButton type="submit">Create user</NavButton>
            </form>

        </div>
    )
}
