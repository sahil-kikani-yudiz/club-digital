export const validationErrors = {
    required : 'This field is required',
    minLength: (length : number) => `Please enter a value greater than or equal to ${length}.`,
    maxLength: (length : number) => `Please enter a value less than or equal to ${length}.`,
}