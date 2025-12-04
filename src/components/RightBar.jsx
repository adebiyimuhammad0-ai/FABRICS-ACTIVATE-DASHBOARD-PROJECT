import React from "react";
import { Box, Button } from "@mui/material";
import picture6 from "../assets/picture-6.png";
import picture5 from "../assets/picture-5.png";
import picture4 from "../assets/picture-4.png";
import picture3 from "../assets/picture-3.png";
import picture2 from "../assets/picture-2.png";
import picture1 from "../assets/picture-1.png";

export default function RightBar() {
  return (
    <Box className="rightbar">
      <div style={{ fontWeight: 700 }}>Cart Items</div>

      <div className="cart-item">
        <img
          src={picture6}
          alt="cart"
          style={{ width: 80, height: 70, objectFit: "cover", borderRadius: 8 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600 }}>Colourful Ankara Fabrics...</div>
          <div className="muted small"> ₦4300</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ width: 28, height: 28, borderRadius: 6 }}>-</button>
            <div style={{ width: 28, textAlign: "center" }}>2</div>
            <button style={{ width: 28, height: 28, borderRadius: 6 }}>+</button>
          </div>
          <button style={{ background: "#ff6b6b", color: "#fff", borderRadius: 6, padding: "6px 8px", border: "none" }}>Remove Item</button>
        </div>
      </div>

      <Button variant="contained" fullWidth sx={{ background: "linear-gradient(90deg,#2b8cff,#86c8ff)" }}>
        Proceed to checkout
      </Button>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="muted small">Stay up to date with our adverts here</div>
          <div className="muted small">3 / 5</div>
        </div>

        <div style={{ marginTop: 10, display: "grid", gap: 4 }}>
          <img
            src= {picture5}
            alt="ad"
            style={{ borderRadius: 8, width: "100%", objectFit: "cover",}} />

          <img
            src= {picture4}
            alt="ad2" style={{ borderRadius: 8, width: "100%", objectFit: "cover" }} />

             <img
            src= {picture3}
            alt="ad2" style={{ borderRadius: 8, width: "100%", objectFit: "cover" }} />

             <img
            src= {picture2}
            alt="ad2" style={{ borderRadius: 8, width: "100%", objectFit: "cover" }} />

             <img
            src= {picture1}
            alt="ad2" style={{ borderRadius: 8, width: "100%", objectFit: "cover" }} />

        </div>
      </div>
    </Box>
  );
}