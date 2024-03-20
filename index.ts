console.log('0.0.6-')

type TextAreaProps = {
  placeholder: string
  clearable: string
  minlength: string | number
  rows: string
}
type InputProps = {
  placeholder: string
  clearable: string
  minlength: string | boolean
  size: string
}

type Comments = Partial<InputProps | TextAreaProps>

const data: Comments = {
  placeholder: 'InputProps',
  clearable: 'InputProps',
  minlength: 'InputProps',
  size: 'size',
  rows: ''

  //   rows: 'InputProps'
}

console.log(data)

type A = {
  aaa: string
}
type B = {
  bbb: number
}

type C = Partial<A & B>

const c: C = {
  aaa: '',
  bbb: 0
}
