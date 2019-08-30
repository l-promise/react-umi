import { Select, Input, Icon } from 'antd';
import Link from 'umi/link';
import styles from './index.scss';
import '../assets/css/index.scss';

function BasicLayout(props) {
  const InputGroup = Input.Group;
  const { Option } = Select;
  return (
    <div className={styles.home}>
      <InputGroup className={styles.input}>
        <Select style={{ width: '227px', height: '40px' }} placeholder="请选择项目">
          <Option value="Home">Home</Option>
          <Option value="Company">Company</Option>
        </Select>
      </InputGroup>
      <ul className={styles.nav}>
        <li>
          <Link to="add">
            <Icon type="plus" />
          </Link>
        </li>
        <li>
          <Link to="detail">
            <p>t1</p>
            <span>2019-09-11 03:23:02</span>
          </Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {props.children}
    </div>
  );
}

export default BasicLayout;
