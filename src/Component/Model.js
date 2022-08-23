import React from "react";
import { Modal, Form, Input } from "antd";
import { useGlobalContext } from "./Context";
const Model = () => {
  const {
    handleOk,
    handleCancel,
    selectedUser,
    setSelectedUser,
    isModalVisible,
  } = useGlobalContext();
  return (
    <Modal
      title="Update User Info"
      visible={isModalVisible}
      onOk={() => handleOk(selectedUser.id)}
      onCancel={handleCancel}
    >
      <Form>
        <Form.Item label="Name">
          <Input
            value={selectedUser.name}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                name: e.target.value,
              })
            }
          ></Input>
        </Form.Item>
        <Form.Item label="Email">
          <Input
            value={selectedUser.email}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                email: e.target.value,
              })
            }
          ></Input>
        </Form.Item>
        <Form.Item label="Phone">
          <Input
            value={selectedUser.phone}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                phone: e.target.value,
              })
            }
          ></Input>
        </Form.Item>
        <Form.Item label="Website">
          <Input
            value={selectedUser.website}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                website: e.target.value,
              })
            }
          ></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default Model;
