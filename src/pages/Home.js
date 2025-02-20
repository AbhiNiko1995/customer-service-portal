import { Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { AppBar, Toolbar, Button, Typography, Card, CardContent, Grid, Container ,IconButton, Menu, MenuItem, Avatar} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Home({ user, users, setUser }) {
const [anchorEl, setAnchorEl] = useState(null);
  if (!user) return <Navigate to="/" />;

  const products = users[user].products;
  
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    setUser(null);
    handleMenuClose();
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Customer Service Portal
          </Typography>
          {/* <Button color="inherit" onClick={() => setUser(null)}>
            Logout
          </Button> */}
           <IconButton onClick={handleMenuOpen} size="small">
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>

          <Menu 
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)} 
            onClose={handleMenuClose}
          >
            <MenuItem disabled>{user}</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <div style={{ height: "calc(100vh - 64px)", overflowY: "auto", padding: "20px" }}>
      <Container style={{ marginTop: "20px"}}>
        <Typography variant="h4" gutterBottom>
          Purchased Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      display: "block",
                      margin: "auto",
                    }}
                  />
                  <Typography variant="h6" style={{ marginTop: "10px" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/product/${product.id}`}
                    color="primary"
                    variant="contained"
                    style={{ marginTop: "10px", width: "100%" }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>
    </>
  );
}

export default Home;
