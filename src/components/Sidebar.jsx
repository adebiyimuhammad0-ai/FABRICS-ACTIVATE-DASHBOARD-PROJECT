import React from "react";
import { Box, Avatar } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CollectionsIcon from '@mui/icons-material/Collections';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
    <Box className="sidebar">
      <Box className="logo">
        <Box className="mark" />
        <Box>
          <div style={{ fontWeight: 700 }}>Fabrics</div>
          <div className="muted small">Market</div>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box className="nav-item active"><DashboardIcon fontSize="small" /> <div>Dashboard</div></Box>
        <Box className="nav-item"><LocalShippingIcon fontSize="small" /> <div>Distribution</div></Box>
        <Box className="nav-item"><FavoriteBorderIcon fontSize="small" /> <div>Saved Items</div></Box>
        <Box className="nav-item"><CollectionsIcon fontSize="small" /> <div>Collections</div></Box>
        <Box className="nav-item"><AccountBalanceWalletIcon fontSize="small" /> <div>Wallet</div></Box>
        <Box className="nav-item"><PersonOutlineIcon fontSize="small" /> <div>Edit profile</div></Box>
        <Box className="nav-item"><ChatBubbleOutlineIcon fontSize="small" /> <div>Contact Support</div></Box>
      </Box>

      <Box sx={{ flex: 1 }} />
      <Box className="nav-item" sx={{ color: "#ff6b6b" }}>
        <LogoutIcon fontSize="small" /> <div style={{ marginLeft: 6 }}>Log out</div>
      </Box>
    </Box>
  );
}