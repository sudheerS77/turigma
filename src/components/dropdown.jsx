import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        select value
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to="/warehouse-1">1</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/warehouse-2">2</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/warehouse-3">3</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;