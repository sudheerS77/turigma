// import * as React from "react";
// import Button from "@mui/material/Button";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Grow from "@mui/material/Grow";
// import Paper from "@mui/material/Paper";
// import Popper from "@mui/material/Popper";
// import MenuItem from "@mui/material/MenuItem";
// import MenuList from "@mui/material/MenuList";
// import Stack from "@mui/material/Stack";
// import { Link, useParams } from "react-router-dom";

// export default function MenuListComposition() {
//   const { id } = useParams();
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === "Tab") {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === "Escape") {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <div>
//       <Stack direction="row" spacing={2}>
//         <div>
//           <Button
//             ref={anchorRef}
//             id="composition-button"
//             aria-controls={open ? "composition-menu" : undefined}
//             aria-expanded={open ? "true" : undefined}
//             aria-haspopup="true"
//             onClick={handleToggle}
//           >
//             {id ? id : "WH"}
//           </Button>
//           <Popper
//             open={open}
//             anchorEl={anchorRef.current}
//             role={undefined}
//             placement="bottom-start"
//             transition
//             disablePortal
//           >
//             {({ TransitionProps, placement }) => (
//               <Grow
//                 {...TransitionProps}
//                 style={{
//                   transformOrigin:
//                     placement === "bottom-start" ? "left top" : "left bottom",
//                 }}
//               >
//                 <Paper>
//                   <ClickAwayListener onClickAway={handleClose}>
//                     <MenuList
//                       autoFocusItem={open}
//                       id="composition-menu"
//                       aria-labelledby="composition-button"
//                       onKeyDown={handleListKeyDown}
//                       // className="bg-blue-900 z-50"
//                       // style={{ background: "red" }}
//                     >
//                       {[...Array(46)].map((e, i) => (
//                         <Link to={`/${i + 1}`}>
//                           <MenuItem onClick={handleClose}>{i + 1}</MenuItem>
//                         </Link>
//                       ))}
//                     </MenuList>
//                   </ClickAwayListener>
//                 </Paper>
//               </Grow>
//             )}
//           </Popper>
//         </div>
//       </Stack>
//     </div>
//   );
// }

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 50,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setPersonName(id);
  }, [id]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      // typeof value === "string" ? value.split(",") : value
      value
    );
    navigate(`/${value}`);
  };
  return (
    <div>
      <FormControl sx={{ m: 0, width: 100, mt: 0 }}>
        <Select
          displayEmpty
          value={personName ? personName : "WH"}
          onChange={handleChange}
          input={<OutlinedInput />}
          // renderValue={(selected) => {
          //   if (selected.length === 0) {
          //     return <em>WH</em>;
          //   }

          //   return selected;
          // }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {[...Array(45)].map((n, i) => (
            <MenuItem
              key={i}
              value={i}
              // style={getStyles(name, personName, theme)}
            >
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
