// A mock function to mimic making an async request for data
export const fetchCount = (amount = 1) => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500));
};
