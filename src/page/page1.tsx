import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      navigate("/page2");
    }
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Validate and set phone number to allow only numbers and limit length to 10
    if (name === "phoneNumber" && /^\d{0,10}$/.test(value)) {
      setFormData({ ...formData, [name]: value });
    } else if (name !== "phoneNumber") {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.phoneNumber.length === 10 &&
      formData.email.includes("@")
    ) {
      localStorage.setItem("userDetails", JSON.stringify(formData));
      navigate("/page2");
    } else {
      alert("Please enter valid details.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Page 1
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 10 }} // Optional: to visually limit the input length
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" type="submit" fullWidth>
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Page1;
