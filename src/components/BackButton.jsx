import { IconButton, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Tooltip title="Go Back">
      <IconButton
        color="primary"
        onClick={() => navigate(-1)} // ✅ goes back one step in history
        sx={{
          backgroundColor: "#f5f5f5",
          "&:hover": { backgroundColor: "#e0e0e0" },
        }}
      >
        <ArrowBackIcon />
      </IconButton>
    </Tooltip>
  );
}

export default BackButton;
