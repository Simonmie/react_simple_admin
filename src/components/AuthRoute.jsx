// 封装高阶组件

// 如果有token，则正常跳转，否则跳转到登录页
import { Navigate } from 'react-router-dom'
import { getToken } from '@/utils'

function AuthRoute({ children }) {
  const token = getToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace />
  }
}

export default AuthRoute
