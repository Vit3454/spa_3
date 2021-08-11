export const requireField = (value) => {
  if (value) return undefined
  return 'Поле обязательно для заполнения'
}

export const maxLength = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `Максимальная длинна ${maxLength} символов`
  return undefined
}
