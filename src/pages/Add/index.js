import { Row, Col, Form, Input, Select, DatePicker } from 'antd';

import styles from './index.scss';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 6 },
};
const formDblLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}
export default function() {
  return (
    <div className={styles.add}>
      <Form.Item {...formItemLayout} label="活动名称">
        <Input placeholder="Please input your nickname" />
      </Form.Item>
      <Row>
        <Col span={9}>
          <Form.Item {...formDblLayout} label="服务器">
            <Select defaultValue="lucy" style={{ width: 250 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item {...formDblLayout} label="当前镜像">
            <Select defaultValue="lucy" style={{ width: 250 }} disabled>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item {...formDblLayout} label="镜像当前tag">
            <Input placeholder="Please input your nickname" />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item {...formDblLayout} label="修改后的tag">
            <Select defaultValue="lucy" style={{ width: 250 }} disabled>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item {...formDblLayout} label="当前时间">
            <DatePicker showTime placeholder="Select Time" defaultValue />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item {...formDblLayout} label="修改后的时间">
            <DatePicker showTime placeholder="Select Time" onChange={onChange} onOk={onOk} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}
