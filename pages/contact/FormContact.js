import React, { useState } from 'react'

export default function FormContact() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let msg = ''
        const form = e.target
        const url = "http://localhost:3001/contact"
        setLoading(true)

        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
            })
        })

        const resp = await req.json()
        console.log(resp);

        if (resp.status) {
            form.reset()
            msg = "Your message has been sent successfully."
        } else {
            msg = "Something went wrong ! Please try again."
        }

        alert(msg)
        setLoading(false)
    }

    return (
        <form className="form-contact" onSubmit={handleSubmit}>
            <div><input disabled={loading} required name="name" type="text" placeholder="Full name" /></div>
            <div><input disabled={loading} required name="email" type="email" placeholder="Email address" /></div>
            <div><textarea disabled={loading} required name="message" placeholder="Your message here"></textarea></div>
            <div>
                <button disabled={loading}>
                    {loading ? `Sending  ... ` : `Send Message`}
                </button>
            </div>
        </form>
    )
}
