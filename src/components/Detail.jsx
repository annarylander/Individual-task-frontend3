import React, {useState, useEffect} from 'react'

export default function Detail(props) {
    const [customerDetails, setCustomerDetails] = useState(null)

    useEffect(() => {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`
        const token = localStorage.getItem("token")
        console.log(url)
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

        })
        .then(res => res.json()
        .then(data => setCustomerDetails(data)))
    }, [])
  
    return (
        <div>
            {customerDetails && ( 
                <>
                    <p>Name: {customerDetails.name}</p>
                    <p>Organisation number: {customerDetails.organisationNr}</p>
                    <p>VAT number: {customerDetails.vatNr}</p>
                    <p>Reference: {customerDetails.reference}</p>
                    <p> Payment term: {customerDetails.paymentTerm}</p>
                    <p> Website: {customerDetails.website}</p>
                    <p> Email: {customerDetails.email}</p> 
                    <p>Phone number: {customerDetails.phoneNumber}</p> 
                </>
            )}
        </div>
    )
}
