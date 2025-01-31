import { useState } from 'react'

export function useForm(initialState, validate) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault()
    const validationErrors = validate(values)
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true)
      try {
        await onSubmit(values)
      } catch (error) {
        setErrors({ submit: error.message })
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setErrors(validationErrors)
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setErrors,
  }
}