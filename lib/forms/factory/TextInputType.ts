const TextInputType = {
  text: 'text',
  password: 'password',
  email: 'email',
  supports: (value: string): boolean => {
    return TextInputType[value] !== undefined
  }
}

export default TextInputType
