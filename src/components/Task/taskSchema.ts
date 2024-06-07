import * as yup from "yup";

export const taskSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
});
