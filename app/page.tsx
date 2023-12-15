"use client";
import { useState } from "react";
import ConnectionForm from "./components/ConnectionForm/ConnectionForm";
import Loader from "./utils/Loader/Loader";
import LightController from "./components/LightController/LightController";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    return <LightController />;
  }
  return loading ? (
    <Loader />
  ) : (
    <ConnectionForm setLoading={setLoading} setSuccess={setSuccess} />
  );
}
