import React from "react";
import { Box, IconButton, InputBase, Paper, Badge, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function TopBar() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <div style={{ fontSize: 18 }}>
        Good morning <span style={{ color: "#2b8cff", fontWeight: 600 }}>Johnson</span>
      </div>

      <IconButton><Badge color="primary" variant="dot"><NotificationsNoneIcon /></Badge></IconButton>

      <Paper component="form"
        sx={{ ml: 2, flex: 1, display: "flex", alignItems: "center", gap: 1, padding: "6px 8px", boxShadow: "none", borderRadius: 2 }}>
        <SearchIcon />
        <InputBase placeholder="Search items" sx={{ ml: 1, flex: 1 }} />
      </Paper>

      <Box sx={{ ml: 2 }}>
        <button style={{
          background: "linear-gradient(90deg,#2b8cff,#86c8ff)",
          border: "none",
          padding: "10px 18px",
          color: "#fff",
          borderRadius: 8,
          cursor: "pointer"
        }}>Search</button>
      </Box>

    </Box>
  );
}