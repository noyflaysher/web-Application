import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

export function BookmarkButton(props) {
  const [selected, setSelected] = React.useState(props.selected);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        props.updateBookmark();
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
