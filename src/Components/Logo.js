import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="Logo">
      <span>M</span>
    </div>
  );
}
