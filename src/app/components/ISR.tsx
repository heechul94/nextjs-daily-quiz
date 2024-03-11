import { getCatData } from "@/lib/catData";

const ISR = async () => {
  const catFact = await getCatData();
  return <p>{catFact}</p>;
};

export default ISR;
