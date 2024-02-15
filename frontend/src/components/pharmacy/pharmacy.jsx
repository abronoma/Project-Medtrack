import React from "react";
import PharmacyForm from './Form'
import { Outlet } from "react-router";

export default function Pharmacy() {
  return (
    <div>
      <PharmacyForm />
    </div>
  );
}
