import { Row, Col, Form, Input } from 'antd';
import styles from './index.scss';

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 6 },
};
const formDblLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
export default function() {
  return (
    <div className={styles.add}>
      <Form.Item {...formItemLayout} label="Nickname">
        <Input placeholder="Please input your nickname" />
      </Form.Item>
      <Row>
        <Col span={12}>
          <Form.Item {...formDblLayout} label="Nickname">
            <Input placeholder="Please input your nickname" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item {...formDblLayout} label="Nickname">
            <Input placeholder="Please input your nickname" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}
