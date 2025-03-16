import { Layout, Menu, Popconfirm } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Outlet } from 'react-router-dom'
import './index.scss'

const { Header, Sider } = Layout

const GeekLayout = () => {
  const navigate = useNavigate()

  // 定义菜单项
  const menuItems = [
    {
      key: '/home',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/article',
      icon: <DiffOutlined />,
      label: '内容管理',
    },
    {
      key: '/publish',
      icon: <EditOutlined />,
      label: '发布文章',
    },
  ]

  const onMenuClick = (route) => {
    navigate(route.key)
  }

  return (
    <Layout>
      <Header className="header">
        <div className="title">
          <h3>React-Simple-Admin</h3>
        </div>
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={['/home']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={onMenuClick}
          />
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout
