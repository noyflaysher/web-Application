import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { UseSession } from "../../Context/Session";

export function BookmarkButton(props) {
  const [selected, setSelected] = useState(false);
  React.useEffect(() => {
    setSelected(props.selected);
  }, [props.selected]);
  const session = UseSession();

  const bookmarkHandler = () => {
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session.session.userId,
        recipeId: props.id,
      }),
    };
    if (session.session.bookmarks.indexOf(`${props.id}`) > -1) {
      fetch("http://localhost:3000/bookmark/delete", requestOption)
        .then((res) => res.json())
        .then((data) =>
          session.setSession({
            ...session.session,
            bookmarks: data.user.recipes,
          })
        );
    } else {
      fetch("http://localhost:3000/bookmark/add", requestOption)
        .then((res) => res.json())
        .then((data) =>
          session.setSession({
            ...session.session,
            bookmarks: data.user.recipes,
          })
        );
    }
  };
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected((prev) => !prev);
        bookmarkHandler();
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
