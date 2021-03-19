import React, { useState } from 'react'

const contactObj = {
  name: 'new contact',
  number: 66669999
}

export default function Contact() {
  const [contact, setContact] = useState(contactObj)

  const modifyContact = () => {
    setContact({ ...contact, birthday: '23-08-1995' })
  }

  return (
    <>
      <h2>
        Name: {contact.name} - Number: {contact.number} - Birthday:
        {contact.birthday}
      </h2>
      <button onClick={() => modifyContact()}>Modify Contact</button>
    </>
  )
}
