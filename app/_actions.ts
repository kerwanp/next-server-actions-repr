"use server";

import { withValidate } from "./with-validate";

export const action = withValidate((data) => {
  console.log(data);
});
