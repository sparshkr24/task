import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Accordian from "../Components/Accordian";
import Table from "../Components/Table";
import Button from "@mui/material/Button";

const Page2 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/page1");
  };

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (!userDetails) {
      // No details found, redirect to Page 1
      navigate("/page1");
    }
  }, [navigate]);

  return (
    <Box sx={{ margin: "8px" }}>
      <h1>Page 2</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h3>Component 1</h3>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
      <Table />
      <br />
      <h3>Component 2</h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <Accordian />
      </Box>
    </Box>
  );
};

export default Page2;
