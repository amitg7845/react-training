// Records keeping Projects
import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
  // Normal ways
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [data, setData] = useState([]);
  // const addData = () => {
  //   const newData = { name: name, email: email };
  //   setData([...data, newData]);
  //   setName("");
  //   setEmail("");
  // };
  // Using form
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]);
    setForm(form);
  };
  // Remember it.
  const deleteItem = (indexToDelete) => {
    // let arr = data;
    // arr.splice(indexToDelete, 1);
    // setData([...arr]);
    // OR
    const newData = data.filter((item, index) => index !== indexToDelete);
    setData(newData);
  };

  // Handle Key Down Event
  const handlekeyDown = (event) => {
    if (event.key === "Enter") {
      addData();
    }
  };

  return (
    <div>
      <Header heading="Record keeping" />
      {/* Form */}
      <div className="form">
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
          spacing={2}
        >
          <TextField
            id="outlined-basic"
            // value={name}
            value={form.name}
            // onChange={(event) => setName(event.target.value)}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            label="Name"
            variant="outlined"
          />
          <TextField
            // onCopy={() => window.alert("Don't copy it")} //Copy event
            onKeyDown={(event) => handlekeyDown(event)} // Key Down Event
            id="outlined-basic"
            label="Email"
            // value={email}
            value={form.email}
            // onChange={(event) => setEmail(event.target.value)}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            variant="outlined"
          />
          <Button
            onClick={addData}
            sx={{ padding: "15px 36px" }}
            variant="contained"
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div>
        {data.map((item, index) => (
          <div key={index} className="data-item">
            <h3>{index + 1}</h3>
            <h3>Name: {item.name}</h3>
            <h3>Email: {item.email}</h3>
            <Button
              onClick={() => deleteItem(index)}
              variant="outlined"
              sx={{
                color: "#d32f2f",
                borderColor: "#d32f2f",
                "&:hover": {
                  borderColor: "#b71c1c",
                  backgroundColor: "rgba(211,47,47,0.04)",
                },
              }}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
