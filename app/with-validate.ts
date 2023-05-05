function verifyData(data: FormData) {
  return true;
}

function process(data: FormData) {
  return data;
}

export function withValidate(action) {
  return (formData: FormData) => {
    "use server";

    const isValidData = verifyData(formData);

    if (!isValidData) {
      throw new Error("Invalid input.");
    }

    const data = process(formData);
    return action(data);
  };
}
