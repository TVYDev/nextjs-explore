import { z } from "zod";

export const formValidationSchema = z.object({
  car: z
    .string({ required_error: "Please choose a cars_1" })
    .nonempty("Please choose a car_2"),
  brands: z.array(z.string()).nonempty("Please choose at least one brand"),
  year: z
    .string({ required_error: "Please choose a year" })
    .nonempty("Please choose a year"),
});

export type TFormValidationSchema = z.infer<typeof formValidationSchema>;
