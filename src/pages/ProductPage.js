import { useParams, Navigate, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

function ProductPage({ user, users }) {
  const { id } = useParams();

  if (!user) return <Navigate to="/" />;

  const product = users[user]?.products.find((p) => p.id === Number(id));

  if (!product) return <Typography variant="h6">Product not found</Typography>;

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            padding: "20px",
            textAlign: "center",
            boxShadow: 5,
            borderRadius: "16px",
            background: "#fff8f0",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            {product.name}
          </Typography>
          <motion.img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <CardContent>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ fontSize: "1.1rem", marginTop: "10px" }}
            >
              {product.description}
            </Typography>
          </CardContent>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              component={Link}
              to="/home"
              variant="contained"
              color="primary"
              sx={{
                marginTop: "10px",
                width: "100%",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "30px",
                background: "#1976d2",
                "&:hover": { background: "#1565c0" },
              }}
            >
              Back to Products
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </Container>
  );
}

export default ProductPage;
