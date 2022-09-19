// import { useState } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import { Link, useParams } from "react-router-dom";
// import walmart from "./homePageComponents/walmart.json";

// function DropDown() {
//   const [dv, setDv] = useState();
//   const { id } = useParams();
//   return (
//     // <Dropdown>
//     //   <Dropdown.Toggle
//     //     variant=""
//     //     id="dropdown-basic"
//     //     style={{ background: "darkblue", color: "white" }}
//     //   >
//     //     {id}
//     //     {/* {id ? `WareHouse ${id}` : "select warehouse"} */}
//     //   </Dropdown.Toggle>

//     //   <Dropdown.Menu>
//     //     {[...Array(25)].map((e, i) => (
//     //       <Dropdown.Item className="w-full text-center" key={i}>
//     //         <Link to={`/${i}`}>{i}</Link>
//     //       </Dropdown.Item>
//     //     ))}
//     //   </Dropdown.Menu>
//     // </Dropdown>
//     <div>
//       <select name="" id="">
//         {[...Array(25)].map((e, i) => (
//           <option value={`${i}`}>
//             <Link to={`/${i}`}>{i}</Link>
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default DropDown;
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Link, useParams } from "react-router-dom";

export default function MenuListComposition() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {id ? id : "WH"}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {[...Array(46)].map((e, i) => (
                      <Link to={`/${i + 1}`}>
                        <MenuItem onClick={handleClose}>{i + 1}</MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
