import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { List, Avatar, Card } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);
const ListEvent = () => {
  const [state,setState] = useState({
    eventData : []
  })
  const getDataEvent = async() =>{
    setState({
      ...state
    })
    const res = await axios({
      method: 'get',
      url: 'https://tahuraevent.herokuapp.com/event/getall',
    })
    setState({
      ...state,
      eventData: res.data
    })
  }
  useEffect(()=>{
    getDataEvent()
  },[])
  return (
    <div>
      <Card title="Daftar Event">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5, size: "small"
          }}
          dataSource={state.eventData?state.eventData.event:null}
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              ]}
            // extra={
            //   <img
            //     width={272}
            //     alt="logo"
            //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            //   />
            // }
            >
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.name}</a>}
                description={item.city}
              />
              {/* {item.content} */}
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}
export default ListEvent