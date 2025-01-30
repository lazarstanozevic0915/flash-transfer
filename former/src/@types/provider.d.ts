interface ReducerObject {
  type: string
  payload: any
}

interface InitStateObject {
  loading: boolean

  loginStatus: boolean
  userInfo: {
    name: string
    email: string
    avatar: string
    language: string
    balance: number
  }
}