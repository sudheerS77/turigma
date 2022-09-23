import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";

const options = [];

[...Array(45)].map((item, index) => {
  options.push({ value: index + 1, label: index + 1 });
});

const WHDropdown = () => {
  var [wh, setWh] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setWh(parseInt(id));
  }, [id]);

  console.log("id", id);

  const handleChange = (e) => {
    setWh(e.value);
    navigate(`/${e.value}`);
  };
  return <Select options={options} defaultValue={wh} onChange={handleChange} />;
};

export default WHDropdown;

// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 90,
//     },
//   },
// };

// const names = [...Array(45)];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// const WHDropdown = () => {
//   const anchorRef = React.useRef(null);
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };
//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 90, mt: 3 }}>
//         <Select
//           multiple
//           displayEmpty
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput />}
//           renderValue={(selected) => {
//             if (selected.length === 0) {
//               return <em>WH</em>;
//             }

//             return selected.join(", ");
//           }}
//           MenuProps={MenuProps}
//           inputProps={{ "aria-label": "Without label" }}
//         >
//           {/* <MenuItem disabled value="">
//             <em></em>
//           </MenuItem> */}
//           {[...Array(46)].map((name, i) => (
//             <MenuItem
//               key={name}
//               value={i + 1}
//               onClick={handleClose}
//               style={getStyles(name, personName, theme)}
//             >
//               {i + 1}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// };
// export default WHDropdown;
