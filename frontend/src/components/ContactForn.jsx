import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ''
    })
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  console.log("Submit button clicked")
  const validationErrors = validate()

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors)
    return
  }

  try {
    const response = await fetch(
      'https://she-can-foundation-vh8z.onrender.com/api/contact/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    )

    const data = await response.json()

    if (response.ok) {
      setSuccessMessage(data.message)
      setSubmitted(true)

      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } else {
      alert('Submission failed')
    }
  } catch (error) {
    console.error(error)
    alert('Server error')
  }
}

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-600">
            She Can Foundation
          </h1>

          <p className="text-gray-500 mt-2">
            Get in touch with us
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">

            <div className="text-5xl mb-4">
              🎉
            </div>

            <h2 className="text-2xl font-bold text-green-600">
              {successMessage}
            </h2>

            <p className="text-gray-500 mt-2">
              We will get back to you soon.
            </p>

            <button
              onClick={() => {
                setSubmitted(false)
                setSuccessMessage('')
              }}
              className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700"
            >
              Send Another Message
            </button>

          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700"
            >
              Submit Message
            </button>

          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm