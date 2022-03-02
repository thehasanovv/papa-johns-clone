import React, { useState } from "react";
// import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function DropDown({ options }) {
  const [flag, setFlag] = useState(options[1].image);
  const [title, setTitle] = useState(options[1].title);

  const [anchorEl, setAnchorEl] = useState(null);

  //   const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("handlClick");
  };

  const handleClose = (id) => {
    setAnchorEl(null);
  };

  const dispatchHandler = (option) => {
    setFlag(option.image);
    setTitle(option.title);
    // dispatch(selectActions.showSelected(option));
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        style={{ backgroundColor: "transparent" }}
      >
        <img src={flag} />
        <span>{title}</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((option) => {
          return (
            <MenuItem
              onClick={() => {
                handleClose();
                dispatchHandler(option);
              }}
              key={option.id}
            >
              <img src={option.image} id={option.id} />
              <span>{option.title}</span>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
