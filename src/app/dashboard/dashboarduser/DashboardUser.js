import React from 'react'
import {Layout, Row, Col, Carousel, Menu, Card} from 'antd'
import {Link} from 'react-router-dom'
import ListWisata from './component/ListWisata'
import ListEvent from './component/ListEvent'

const {Header, Content, Footer} = Layout

function DashboardUser() {
  return (
    <Layout>
      <Header id="navbar" style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
        <Row>
          <Col lg={22} md={22}>
            <h1 style={{ fontSize: "2vw" }}>Sistem Informasi Pemetaan Wisata TAHURA Nuraksa</h1>
          </Col>
          <Col lg={2} md={2}><Link to="/login">Login</Link></Col>
        </Row>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Carousel dotPosition="left" autoplay style={{ zIndex: 1 }}>
          <div>
            <img style={{ maxWidth: "100%", maxHeight: "100%", display: "block", width: "100%", height: "auto" }} src="https://scontent.fdps3-1.fna.fbcdn.net/v/t1.0-9/s960x960/31682301_1900091113395001_1354160672547536896_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_eui2=AeGFRzH4FGnw5GeCXL5IhMYIA4lhGpyxxH0DiWEanLHEfSyqnjxcK1FbUfhoO7dtUcKUs9vxcFu-Jz9H7t1lV8d6&_nc_ohc=2s7RCor1URkAX-LCoQw&_nc_ht=scontent.fdps3-1.fna&_nc_tp=7&oh=97c435bf93032450d53d05438e2b35b4&oe=5EC3E81B"></img>
          </div>
          <div>
            <img style={{ maxWidth: "100%", maxHeight: "100%", display: "block", width: "100%", height: "auto" }} src="https://scontent.fdps3-1.fna.fbcdn.net/v/t1.0-9/s960x960/31682301_1900091113395001_1354160672547536896_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_eui2=AeGFRzH4FGnw5GeCXL5IhMYIA4lhGpyxxH0DiWEanLHEfSyqnjxcK1FbUfhoO7dtUcKUs9vxcFu-Jz9H7t1lV8d6&_nc_ohc=2s7RCor1URkAX-LCoQw&_nc_ht=scontent.fdps3-1.fna&_nc_tp=7&oh=97c435bf93032450d53d05438e2b35b4&oe=5EC3E81B"></img>
          </div>
          <div>
            <img style={{ maxWidth: "100%", maxHeight: "100%", display: "block", width: "100%", height: "auto" }} src="https://scontent.fdps3-1.fna.fbcdn.net/v/t1.0-9/s960x960/31682301_1900091113395001_1354160672547536896_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_eui2=AeGFRzH4FGnw5GeCXL5IhMYIA4lhGpyxxH0DiWEanLHEfSyqnjxcK1FbUfhoO7dtUcKUs9vxcFu-Jz9H7t1lV8d6&_nc_ohc=2s7RCor1URkAX-LCoQw&_nc_ht=scontent.fdps3-1.fna&_nc_tp=7&oh=97c435bf93032450d53d05438e2b35b4&oe=5EC3E81B"></img>
          </div>
        </Carousel>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">Beranda</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/peta">Peta</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/tentangkami">Tentang Kami</Link></Menu.Item>
        </Menu>
        <Card>
          <div className="site-layout-background" style={{ padding: 5, minHeight: 380 }}>
            <Row gutter={16}>
              <Col md={6} lg={18}><ListWisata /></Col>
              <Col md={6} lg={6}><ListEvent /></Col>
            </Row>
          </div>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center', color: "white" }}>Program Studi Teknik Informatika ©2020 Created by Habiburrahman</Footer>
    </Layout>
  )
}

export default DashboardUser