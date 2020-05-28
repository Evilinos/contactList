export const required = value =>
    value ? undefined : 'Required'

export const number = value =>
    isNaN(Number(value)) ? 'Must be a number' : undefined

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength20 = maxLength(20)

