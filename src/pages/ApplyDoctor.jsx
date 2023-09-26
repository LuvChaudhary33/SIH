
import Layout from "../components/Layout"
import {Col, Form, Input, Row} from "antd"
const ApplyDoctor = () => {
  return (
    <Layout>
        <h1 className='page-title'>ApplyDoctor</h1>
        <hr />
        <Form layout="vertical">
            <h1 className="card-title mt-3">Personal Information</h1>
            <Row gutter={20}>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="First Name" name="firstName" rules={[{required:true}]}>
                        <Input placeholder="First Name" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Last Name" name="lastName" rules={[{required:true}]}>
                        <Input placeholder="Last Name" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Phone Number" name="phoneNumber" rules={[{required:true}]}>
                        <Input placeholder="Phone Number" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Website" name="website" rules={[{required:true}]}>
                        <Input placeholder="Website" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Address" name="address" rules={[{required:true}]}>
                        <Input placeholder="Address" />
                    </Form.Item>
                </Col>
            </Row>
            <hr />
            <h1 className="card-title mt-3">Professional Information</h1>
            <Row gutter={20}>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Specialization" name="specialization" rules={[{required:true}]}>
                        <Input placeholder="Specialization" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Experience" name="experience" rules={[{required:true}]}>
                        <Input placeholder="Experience" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Phone Number" name="phoneNumber" rules={[{required:true}]}>
                        <Input placeholder="Phone Number" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Website" name="website" rules={[{required:true}]}>
                        <Input placeholder="Website" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  required label="Address" name="address" rules={[{required:true}]}>
                        <Input placeholder="Address" />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </Layout>
  )
}

export default ApplyDoctor