export const validateSignIn = (values) => {
    const errors = {}
    
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid'
    }
    
    if (!values.password) {
      errors.password = 'Password is required'
    }
    
    return errors
  }
  
  export const validateSignUp = (values) => {
    const errors = {}
    
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid'
    }
    
    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }
    
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password'
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match'
    }
    
    if (!values.location) {
      errors.location = 'Location is required'
    }
    
    return errors
  }