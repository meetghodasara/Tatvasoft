import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import Input from "@mui/joy/Input";
import Avatar from "@mui/joy/Avatar";

const Apple = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();
  const onHomePageButtonClick = () => {
    console.log("Button Clicked");
    console.log("Name : ", name);
    console.log("Email : ", email);

    Navigate("/");
  };

  return (
    <div>
      <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "10vh",
            coloumnGap: "10px",
            margin: "10px",
            padding : "20px"
        }}
      >
        <p style={{ fontSize : 30}}>Apple Page 🍎</p>
        <div>
          <Avatar color="primary" variant="solid">
            MG
          </Avatar>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "20vh",
          coloumnGap: "10px",
          rowGap: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Input
          type="text"
          placeholder="Name"
          variant="outlined"
          color="neutral"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          variant="outlined"
          color="neutral"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button variant="contained" onClick={onHomePageButtonClick}>
          Navigate to Home
        </Button>
      </div>
    </div>
  );
};
export default Apple;
