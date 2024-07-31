export function normalizedLevelName(chromaName: string) {
    if (chromaName.includes("EEquippableSkinLevelItem::")) {
      const splitStr = chromaName.split("::");
      const variant = splitStr[1].replace("(", "").replace(")", "").trim();
      return variant
    }
    return chromaName
  }
  