import React from "react";
import {
    Layout,
    Menu,
    Breadcrumb,
    Button,
    Divider,
    Switch,
    Checkbox,
    Input,
    DatePicker,
    Space,
    Slider,
    Alert
} from "antd";

const { Header, Content, Footer } = Layout;

function App() {
    const handleSwitchChange = checked => {
        //less variables that will be used here must be declared in themeVariables on config-overrides.js
        window.less
            .modifyVars({
                "@primary-color": checked ? "#52c41a" : "@blue-6"
            })
            .then(() => {
                console.log("color changed!");
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Layout className="layout">
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 50 }}>
                    <div style={{ textAlign: "center" }}>
                        <Space>
                            Change Color
                            <Switch onChange={handleSwitchChange} />
                        </Space>
                    </div>
                    <Divider />
                    <div>
                        <Space>
                            <Button type="primary">Button</Button>
                            <Checkbox defaultChecked />
                            <Switch defaultChecked />
                            <Input />
                            <DatePicker />
                        </Space>
                    </div>
                    <div>
                        <Slider defaultValue={30} />
                    </div>
                    <Alert message="Informational Notes" type="info" showIcon />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default App;
