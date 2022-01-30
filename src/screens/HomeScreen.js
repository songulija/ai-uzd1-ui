import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPlayers, addPlayer } from '../redux/actions/playersActions'
import { Col, Table, Row, Space, Typography, Button, Input, Popconfirm } from 'antd';
// import { Button } from 'react-bootstrap'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import AddPlayerComponent from '../components/AddPlayerComponent';


function HomeScreen() {
  const dispatch = useDispatch();
  const playersReducer = useSelector((state) => state.playersReducer)
  const [addVisibility, setAddVisibility] = useState(false)

  //for add player component
  const showAddComponent = () => {
    setAddVisibility(true)
  }
  const unshowAddVisibility = () => {
    setAddVisibility(false)
  }
  const saveAddPlayer = (postObj) => {
    // console.log(postObj)
    unshowAddVisibility();
  }
  useEffect(() => {
    dispatch(getPlayers())
  }, [dispatch])

  const columns = [
    {
      title: 'Sportas',
      dataIndex: 'team',
      width: '10%',
      render: (text, record, index) => (
        <p>{text.sport.title}</p>
      )
    },
    {
      title: 'Komanda',
      dataIndex: 'team',
      width: '20%',
      render: (text, record, index) => (
        <p>{text.title}</p>
      )
    },
    {
      title: 'Vardas pavarde',
      dataIndex: 'name',
      width: '20%',
    },
    {
      title: 'Aukštis',
      dataIndex: 'height',
      width: '15%',
    },
    {
      title: 'Svoris',
      dataIndex: 'weight',
      width: '20%',
    },
    {
      title: 'Pozicija',
      dataIndex: 'position',
      width: '15%'
    }

  ]

  return (
    <>
      <>
        {/* column has 100 percent if span 24 */}
        <div style={{ marginTop: 45, marginBottom: 45 }}>
          <Col span={24} offset={1}>
            <Row gutter={16}>
              <Col span={18}>
                <div style={{ marginRight: '40px', marginBottom: 25 }}>
                  <Typography.Title>Žaidėjai</Typography.Title>
                  <Typography.Text>
                    Pridėkite naują žaidėja. Jam automatiškai bus priskirtas sportasm komanda ir pozicija.
                    Tai bus apskaičiuojama pagal jo/jos ūgi ir svorį
                  </Typography.Text>
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={22}>

                <Table
                  rowKey="id"
                  columns={columns}
                  dataSource={playersReducer.players}
                  pagination={{ pageSize: 30 }}
                  bordered
                  scroll={{ x: 'calc(700px + 50%)' }}
                // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                />
                <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" onClick={() => showAddComponent()}><PlusOutlined />Pridėti žaidėją</Button></Space>

              </Col>
            </Row>
          </Col>
          {/* {this.state.addPanelVisibility !== false ?
            <AddTransportationComponent visible={this.state.addPanelVisibility} onClose={this.unshowTransportationAddPanel}
              save={this.addTransportation} companies={this.props.companiesReducer.companies} />
            : null} */}
            {addVisibility === true?
            <AddPlayerComponent visible={addVisibility} onClose={unshowAddVisibility}
              save={saveAddPlayer}
            />:null}
        </div>
      </>
    </>
  );
}

export default HomeScreen;
