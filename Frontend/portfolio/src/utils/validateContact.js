// Pure validation rules for the contact form. Returns an object of error messages.
// An empty object means the form is valid.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const contactLimits = {
  name: { min: 2, max: 60 },
  subject: { min: 3, max: 100 },
  message: { min: 10, max: 1000 },
}

export function validateField(field, rawValue) {
  const value = (rawValue ?? '').trim()

  switch (field) {
    case 'name': {
      if (!value) return 'Please enter your name.'
      if (value.length < contactLimits.name.min) return `Name must be at least ${contactLimits.name.min} characters.`
      if (value.length > contactLimits.name.max) return `Name must be ${contactLimits.name.max} characters or fewer.`
      return ''
    }
    case 'email': {
      if (!value) return 'Please enter your email address.'
      if (value.length > 120) return 'Email must be 120 characters or fewer.'
      if (!EMAIL_PATTERN.test(value)) return 'Please enter a valid email address, such as name@example.com.'
      return ''
    }
    case 'subject': {
      if (!value) return 'Please enter a subject.'
      if (value.length < contactLimits.subject.min) return `Subject must be at least ${contactLimits.subject.min} characters.`
      if (value.length > contactLimits.subject.max) return `Subject must be ${contactLimits.subject.max} characters or fewer.`
      return ''
    }
    case 'message': {
      if (!value) return 'Please write a message.'
      if (value.length < contactLimits.message.min) return `Message must be at least ${contactLimits.message.min} characters.`
      if (value.length > contactLimits.message.max) return `Message must be ${contactLimits.message.max} characters or fewer.`
      return ''
    }
    default:
      return ''
  }
}

export function validateContact(values) {
  const errors = {}
  for (const field of ['name', 'email', 'subject', 'message']) {
    const message = validateField(field, values[field])
    if (message) errors[field] = message
  }
  return errors
}
