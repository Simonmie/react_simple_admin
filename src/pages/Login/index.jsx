// Desc: 登录页面
import { Card, Form, Input, Button, Checkbox } from 'antd'
import { fetchLogin } from '../../store/modules/user'
import './index.scss'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log('Success:', values)
    // 触发登录
    await dispatch(fetchLogin(values))
    // 跳转到首页
    navigate('/')
    // 发出提示
    message.success('登录成功')
  }

  return (
    <div className="login">
      <Card className="login-container">
        <div className="login-title">
          <h1>React-Simple-Admin</h1>
        </div>
        {/* 登录表单 */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur',
              },
              { required: true, message: '请输入手机号' },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
              { required: true, message: '请输入验证码' },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
