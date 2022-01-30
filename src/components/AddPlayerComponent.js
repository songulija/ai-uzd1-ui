import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button, Form, Space, Input, InputNumber } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { addPlayer } from '../redux/actions/playersActions'

function AddPlayerComponent(props) {
    const dispatch = useDispatch();
    const [player, setPlayer] = useState({
        teamId: 1,
        name: "",
        weight: 0,
        height: 0,
        position: 'Įžaidėjas'
    })
    const playersReducer = useSelector((state) => state.playersReducer)
    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const saveChanges = () => {
        const postObj = {
            ...player
        }
        dispatch(addPlayer(postObj))
        props.save(postObj)
    }

    const onDataChange = (value, inputName) => {
        setPlayer(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }
    return (
        <Modal
            onCancel={onCancel}
            saveChanges={saveChanges}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            title={<Space><ArrowLeftOutlined onClick={onCancel} />Pridėti naują žaidėją</Space>}
            visible={props.visible}
            footer={
                <div>
                    <Button key="customCancel" onClick={onCancel}>Atšaukti</Button>
                    <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Pridėti</Button>
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">Žaidėjų kūrimas</h1>
                <Form.Item key="name" name="name" label="Vardas ir pavardė">
                    <Input required style={{ width: '100%' }} placeholder="Įrašykite vardą ir pavardę" value={player.name} onChange={(e) => onDataChange(e.target.value, "name")} />
                </Form.Item>
                <Form.Item key="height" name="height" label="Aukštis (cm)">
                    <InputNumber required style={{ width: '100%' }} placeholder="Įrašykite aukštį (cm)" value={player.height} onChange={(e) => onDataChange(e, "height")} />
                </Form.Item>
                <Form.Item key="weight" name="weight" label="Svoris (kg)">
                    <InputNumber required style={{ width: '100%' }} placeholder="Įrašykite svorį (kg)" value={player.weight} onChange={(e) => onDataChange(e, "weight")} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddPlayerComponent;
