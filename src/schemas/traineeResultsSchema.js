import * as Yup from "yup";

export const traineeResultsSchema = Yup.object({
      moduleScore: Yup.number().positive()
  });