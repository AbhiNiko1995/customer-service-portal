import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Card, CardContent } from "@mui/material";
import users from "../data/users";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (users[username] && users[username].password === password) {
      setUser(username);
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/images/backgroundImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden", 
      }}
    >
      <Card style={{ padding: "20px", width: "350px", textAlign: "center", backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "10px" }}
            sx={{
                input: { color: "#ddd" },
                label: { color: "#bbb" }, 
                "& .MuiOutlinedInput-root": {
                  "&::placeholder": {
                    color: "white",
                    opacity: 1,
                  },
                },
              }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "10px" }}
            sx={{
                input: { color: "#ddd" }, // Light text color
                label: { color: "#bbb" }, // Light label color
                "& .MuiOutlinedInput-root": {
                  "&::placeholder": {
                    color: "white",
                    opacity: 1,
                  },
                },
              }}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Submit
          </Button>
          {error && (
            <Typography color="error" style={{ marginTop: "10px" }}>
              {error}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
