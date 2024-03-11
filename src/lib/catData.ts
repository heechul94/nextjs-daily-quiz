export const getCatData = async (option?: {
  cache: "no-cache" | "force-cache";
}) => {
  try {
    const response = await fetch("https://catfact.ninja/fact", option);
    const { fact } = await response.json();
    return fact;
  } catch (error) {
    console.log(error);
  }
};
