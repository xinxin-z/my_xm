// 定义state函数，返回对象
export const state = () => ({
  userInfo: {
    token: '',
    user: {}
  }
})
// 定义mutations
export const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}
// 定义actions
export const actions = {
  setUserInfo (context, userInfo) {
    return this.$axios.post('/accounts/login', userInfo).then((res) => {
      console.log(res)
      if (res.status === 200) {
        context.commit('setUserInfo', res.data)
        localStorage.setItem('travel_user', JSON.stringify(res.data))
      }
    })
  }
}
