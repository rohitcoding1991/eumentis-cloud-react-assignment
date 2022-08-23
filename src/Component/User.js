import React from "react";
import { Card, Col, Row } from "antd";
import { useGlobalContext } from "./Context";
import "../App.css";
import Model from "./Model";
const User = () => {
  const {
    users,
    HandleDelete,
    isModalVisible,
    showModal,
    handleOk,
    handleCancel,
    selectedUser,
    setSelectedUser,
  } = useGlobalContext();
  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={[20, 20]}>
          {users.map((info, index) => {
            const { id, name, email, phone, website, username } = info;
            let profile = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
            return (
              <>
                <Col span={6} key={index}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src={profile}
                        className="user-profile"
                        width="300px"
                        height="200px"
                      />
                    }
                    className="user-card"
                  >
                    <div className="user-info">
                      <h1>{name}</h1>
                      <h2>
                        <span className="fa-solid fa-envelope"></span>
                        {email}
                      </h2>
                      <h2>
                        <span className="fa-solid fa-phone-flip"></span>
                        {phone}
                      </h2>
                      <h2>
                        <span className="fa-solid fa-globe"></span>
                        {`http://${website}`}
                      </h2>
                    </div>
                    <div className="card-actions">
                      <i
                        className="fa-regular fa-heart"
                        style={{ color: "red" }}
                      ></i>
                      <i
                        className="fa-solid fa-pen"
                        onClick={() => showModal(info)}
                      ></i>
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => HandleDelete(id)}
                      ></i>
                    </div>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
        <Model />
      </div>
    </>
  );
};
export default User;
