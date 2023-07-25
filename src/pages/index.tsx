import { Button, Grid, Stack, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AutoCompleteInput from "@/components/AutoCompleteInput";
import {
  TFormValidationSchema,
  formValidationSchema,
} from "@/libs/validations/all";
import MultiAutoCompleteInput from "@/components/MultiAutoCompleteInput";
import { IDropDownOption } from "@/types/form";
import { useEffect, useMemo } from "react";

const carOptions: IDropDownOption[] = [
  { value: "audi_q8", label: "Audi Q8" },
  { value: "volvo_cx90", label: "Volvo CX90" },
  { value: "defender", label: "Landrover Defender" },
];

const brandOptions: IDropDownOption[] = [
  { value: "audi", label: "Audi" },
  { value: "volvo", label: "Volvo" },
  { value: "bmw", label: "BMW" },
];

const yearOptions: IDropDownOption[] = [
  { value: "2001", label: "2001" },
  { value: "2010", label: "2010" },
  { value: "2020", label: "2020" },
];

let reRender = 0;

export default function Home() {
  const { control, handleSubmit, setValue, reset, watch, resetField } =
    useForm<TFormValidationSchema>({
      resolver: zodResolver(formValidationSchema),
      defaultValues: {
        car: "",
        brands: [],
        year: "",
      },
    });

  const watchCar = watch("car");
  const watchYear = watch("year");

  const onFormSubmit = (data: TFormValidationSchema) => {
    console.log("Submitted Data", data);
  };

  const yearsOptionBasedOnCar = useMemo(
    () =>
      watchCar === "audi_q8"
        ? yearOptions.filter((option) => option.value !== "2001")
        : yearOptions,
    [watchCar]
  );

  useEffect(() => {
    if (yearsOptionBasedOnCar.some((option) => option.value === watchYear))
      return;

    resetField("year");
  }, [yearsOptionBasedOnCar, watchYear, resetField]);

  const handleResetForm = () => {
    reset();
  };

  const handleSetCar = () => {
    setValue("car", "volvo_cx90", { shouldValidate: true });
  };

  const handleSetBrands = () => {
    setValue("brands", ["audi", "bmw"], { shouldValidate: true });
  };

  console.log("Rerender", reRender++);

  return (
    <main className="p-4">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <section id="single_autocomplete">
              <Typography variant="subtitle1" className="pb-2">
                AutoComplete
              </Typography>
              <Grid container spacing={2}>
                <Grid
                  item
                  md={12}
                  container
                  spacing={2}
                  className="flex items-center"
                >
                  <Grid item md={6}>
                    <AutoCompleteInput
                      control={control}
                      name="car"
                      options={carOptions}
                      textFieldProps={{
                        label: "Cars",
                      }}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <Button variant="outlined" onClick={handleSetCar}>
                      Set Car to Volvo CX 90
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </section>
          </Grid>
          <Grid item md={12}>
            <section id="multip_autocomplete">
              <Typography variant="subtitle1" className="pb-2">
                MultiAutoComplete
              </Typography>
              <Grid container spacing={2}>
                <Grid
                  item
                  md={12}
                  container
                  spacing={2}
                  className="flex items-center"
                >
                  <Grid item md={6}>
                    <MultiAutoCompleteInput
                      control={control}
                      name="brands"
                      options={brandOptions}
                      textFieldProps={{
                        label: "Brands",
                      }}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <Button variant="outlined" onClick={handleSetBrands}>
                      Set BMW & Audi
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </section>
          </Grid>
          <Grid item md={12}>
            <section id="dynamic_single_autocomplete">
              <Typography variant="subtitle1" className="pb-2">
                Dynamic Single AutoComplete
              </Typography>
              <Grid container spacing={2}>
                <Grid
                  item
                  md={12}
                  container
                  spacing={2}
                  className="flex items-center"
                >
                  <Grid item md={6}>
                    <AutoCompleteInput
                      control={control}
                      name="year"
                      options={yearsOptionBasedOnCar}
                      textFieldProps={{
                        label: "Year",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </section>
          </Grid>
          <Grid item md={12}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
              <Button onClick={handleResetForm} variant="outlined">
                Reset
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </main>
  );
}
