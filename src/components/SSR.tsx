import { getCatData } from "@/lib/catData";

const SSR = async () => {
  const catFact = await getCatData({ cache: "no-cache" });
  return <p>{catFact}</p>;
};

export default SSR;
