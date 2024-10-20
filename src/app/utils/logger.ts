const info = (
  message: string | object | object[] | boolean | undefined | null,
) => {
  console.log(message);
};

const error = (
  message: string | object | object[] | boolean | undefined | null | unknown,
) => {
  console.log(message);
};

export const logger = { info, error };
