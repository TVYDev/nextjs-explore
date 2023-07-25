import { IDropDownOption } from "@/types/form";
import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface IAutoCompleteInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: IDropDownOption[];
  textFieldProps?: TextFieldProps;
}

const AutoCompleteInput = <T extends FieldValues>({
  control,
  name,
  options,
  textFieldProps,
}: IAutoCompleteInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Autocomplete
          options={options}
          value={options.find((option) => option.value === field.value) ?? null}
          onChange={(_, option) => field.onChange(option?.value)}
          renderInput={(params) => (
            <TextField
              {...params}
              {...textFieldProps}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      )}
    />
  );
};

export default AutoCompleteInput;
