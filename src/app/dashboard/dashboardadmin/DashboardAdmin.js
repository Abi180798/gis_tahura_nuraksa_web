import React from "react";
import { Layout, Menu } from "antd";
import {
  ReadOutlined,
  DashboardOutlined,
  UserOutlined,
  PictureOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, BrowserRouter,Route,Switch,useRouteMatch, useParams } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const DashboardAdmin = () => {
    let{path,url}=useRouteMatch()
    let {topic}=useParams()
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ backgroundColor: "#34495e", paddingTop: 30 }}
      >
        <div className="logo" style={{ height: 60, paddingLeft: 15 }}>
          haha
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ fontSize: 18, fontWeight: "normal" }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboardadmin/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PictureOutlined />}>
            <Link to={`/${url}/wisata`}>Wisata</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ReadOutlined />}>
            <Link to="/event">Event</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/user">User</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />} style={{color:"#fff"}}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ height: "100vh" }}>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, height: 60, backgroundColor: "#34495e" }}
        />
        <Content style={{ margin: "24px 16px 0", backgroundColor: "#fff" }}>
            {/* <BrowserRouter> */}
            <Switch>
          <Route exact path={`${path}`}><div>dashboard</div></Route>
    <Route  path={`${path}/:wisata`}><div>Wisata{topic}</div></Route>
            </Switch>
            {/* </BrowserRouter> */}
        </Content>
        {/* <Footer style={{ textAlign: "center",backgroundColor:"#fff" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default DashboardAdmin;
