// 用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils/request'
import { getToken, setToken as _setToken } from '@/utils'

const useStore = createSlice({
  name: 'user',
  // 初始状态
  initialState: {
    token: getToken || '',
  },

  // 状态修改器
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
  },
})

// 解构出actionCreator
const { setToken } = useStore.actions

// 获取reducer

const userReducer = useStore.reducer

// 异步方法：登录获取登录
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await request.post('/authorizations', loginForm)
    // 提交同步方法实现数据的存入
    console.log(res)
    dispatch(setToken(res.data.data.token))
  }
}

export { fetchLogin, setToken }
export default userReducer
