import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

export function BookmarkButton(props) {
  const [selected, setSelected] = useState(false);
  React.useEffect(() => {
    setSelected(props.selected);
  }, [props.selected]);
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected((prev) => !prev);
        props.updateBookmark();
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
