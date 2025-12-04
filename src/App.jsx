
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import FeatureCard from "./components/FeatureCard";
import ProductCard from "./components/ProductCard";
import RightBar from "./components/RightBar";
import React from "react";

const sampleProducts = [
  { id: 1, title: "Thick Vintage", price: "₦4300", stock: 40, img: "https://picsum.photos/id/1060/600/400" },
  { id: 2, title: "Thick Vintage", price: "₦4300", stock: 40, img: "https://picsum.photos/id/1025/600/400" },
  { id: 3, title: "Thick Vintage", price: "₦4300", stock: 40, img: "https://picsum.photos/id/1071/600/400" },
  { id: 4, title: "Colourful Stack", price: "₦4300", stock: 40, img: "https://picsum.photos/id/1020/600/400" },
  { id: 5, title: "Pattern Mix", price: "₦4300", stock: 40, img: "https://picsum.photos/id/1015/600/400" },
  { id: 6, title: "Rolls", price: "₦4300", stock: 40, img: "https://picsum.photos/id/1035/600/400" },
];

export default function App() {
  return (
    <Box className="app-layout">
      <Sidebar />
      <Box className="main">
        <TopBar />
        <Box sx={{ mt: 3 }}>
          <Box className="feature-grid">
            <FeatureCard icon="label" title="Distributions" />
            <FeatureCard icon="shopping_cart" title="Orders" />
            <FeatureCard icon="card_giftcard" title="Connect with Stylists" />
          </Box>

          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Box>
                <h3 style={{ margin: 0 }}>Latest Trends In Stocks</h3>
                <div className="muted small">Discover items trending in our stores</div>
              </Box>
              <div className="muted small">Showing 1 - 6</div>
            </Box>

            <Box className="products-grid" sx={{ mt: 2 }}>
              {sampleProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <RightBar />
    </Box>
  );
}