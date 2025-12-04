import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LabelIcon from '@mui/icons-material/Label';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function FeatureCard({ icon, title }) {
  const Icon = icon === "label" ? LabelIcon : icon === "shopping_cart" ? LocalMallIcon : CardGiftcardIcon;

  return (
    <Card elevation={2} sx={{ p: 1 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 4 }}>
        <Icon sx={{ color: "#2b8cff", mb: 1 }} />
        <Typography variant="h6" sx={{ color: "#2b8cff", fontWeight: 600 }}>{title}</Typography>
      </CardContent>
    </Card>
  );
}