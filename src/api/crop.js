export async function getCropRecommendation(inputData) {
  const res = await fetch("http://localhost:8000/api/crop", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  });
  if (!res.ok) throw new Error("Backend error");
  return await res.json();
}
