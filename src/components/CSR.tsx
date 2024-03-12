"use client";

import { getCatData } from "@/lib/catData";
import { useEffect, useState } from "react";

const CSR = () => {
  const [catFact, setCatFact] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCatData();
      setCatFact(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return <p>{catFact}</p>;
};

export default CSR;
