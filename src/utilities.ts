export const generateTxHash = () => {
  const chars = "abcdef0123456789";
  let hash = "0x";
  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

export const traverseTree = (rules: any, path: string[] = [], paths: string[][] = []): string[][] => {
  for (const key in rules) {
      const currentPath = [...path, key];
      if (rules[key]) {
        traverseTree(rules[key] as any, currentPath, paths);
      } else {
          paths.push(currentPath);
      }
  }
  return paths;
};