import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";
function DropDown() {
  const [dv, setDv] = useState();
  const { id } = useParams();
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        style={{ background: "darkblue", color: "white" }}
      >
        {id ? id : "select warehouse"}
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
