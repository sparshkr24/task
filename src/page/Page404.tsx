import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h3" component="h1">
          404 Not Found
        </Typography>
        <Typography variant="body1">
          Sorry, the page you are looking for does not exist.
        </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={() => {
          navigate("/")
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
