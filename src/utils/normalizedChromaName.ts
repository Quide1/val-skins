export function normalizedChromaName(chromaName: string) {
  if (chromaName.includes("\n")) {
    const splitStr = chromaName.split("\n");
    const variant = splitStr[1].replace("(", "").replace(")", "").trim();
    return variant
  }
  return chromaName
}
