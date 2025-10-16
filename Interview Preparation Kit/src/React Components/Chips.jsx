import React, { useState } from "react";
// import "./styles.css";
function ChipsInput() {
  const [chipItemList, setChipItemList] = useState([]);

  const onHandleEvent = (event) => {
    console.log("Key pressed down:", event.key);
    if (event.key === "Enter") {
      const value = event.target.value.trim();

      const newValue = chipItemList.find((x) => x.item === value.trim());

      console.log(newValue, "newValue");

      if (value && !newValue) {
        const itm = {
          id: chipItemList?.length,
          item: value,
        };
        setChipItemList((previous) => [...previous, itm]);

        event.target.value = "";
      }
    }
  };

  const handleDelete = (id) => {
    const filtered = chipItemList.filter((item) => item.id !== id);
    setChipItemList(filtered);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onKeyDown={onHandleEvent}
      />
      {chipItemList?.length > 0 && (
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {chipItemList?.map(({ id, item }) => (
            <li
              key={id}
              style={{
                border: "1px solid grey",
                listStyle: "none",
                padding: "5px 10px",
                margin: "10px",
                background: "grey",
                borderRadius: "15px",
              }}
            >
              {item}
              &nbsp;
              <span
                aria-label="delete"
                style={{
                  cursor: "pointer",
                  color: "red",
                  fontSize: "12px",
                  padding: "5px",
                }}
                onClick={() => handleDelete(id)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      )}

      <div></div>
    </div>
  );
}

export default ChipsInput;
