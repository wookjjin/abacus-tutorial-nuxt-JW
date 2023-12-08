interface IUser {
  userId: ''
  userName: ''
  role: ''
}

export const useUser = () => {
  const user = ref<IUser>()

  function updateUser(userData: IUser) {
    user.value = userData
  }

  return { user, updateUser }
}
