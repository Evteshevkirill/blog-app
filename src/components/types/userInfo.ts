export interface IUserInfo {
  isLoading: boolean
  isSuccess: boolean
  error: {
    data: {
      errors: {
        [key: string]: string
      }
    }
  }
  data: {
    user: {
      username: string
      email: string
      image: string
      bio: string
      token: string
    }
  }
}
