export const sleep = (ms: number) => {
  const start = performance.now();

  while (performance.now() - start < ms);
};

export const sleepPromised = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
