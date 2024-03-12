import { getCatData } from "@/lib/catData";

const SSG = async () => {
  const catFact = await getCatData();
  return <p>{catFact}</p>;
};

export default SSG;
