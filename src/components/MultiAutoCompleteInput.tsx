import { IDropDownOption } from "@/types/form";
import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface IMultiAutoCompleteInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: IDropDownOption[];
  textFieldProps?: TextFieldProps;
}

const MultiAutoCompleteInput = <T extends FieldValues>({
  control,
  name,
  options,
  textFieldProps,
}: IMultiAutoCompleteInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Autocomplete
          multiple
          options={options}
          value={
            options.filter((option) => field.value.includes(option.value)) ?? []
          }
          onChange={(_, options) =>
            field.onChange(
              options.reduce((list, option) => {
                list.push(option.value);
                return list;
              }, [] as (string | number)[])
            )
          }
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

export default MultiAutoCompleteInput;
