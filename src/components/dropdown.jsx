import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";
import walmart from "./homePageComponents/walmart.json";

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
        {id ? `WareHouse ${id}` : "select warehouse"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {[...Array(25)].map((e, i) => (
          <Dropdown.Item className="w-full" key={i}>
            <Link to={`/${i}`} className="w-full">
              Warehouse {i}
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
