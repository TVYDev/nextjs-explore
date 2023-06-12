import Stack from "@mui/material/Stack";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";

interface ICurrency {
  label: string;
  value: string;
}

const currencies: ICurrency[] = [
  {
    label: "Riel",
    value: "KHR",
  },
  {
    label: "Dollar",
    value: "USD",
  },
];

const commonTextFieldProps: TextFieldProps = {
  fullWidth: true,
  variant: "standard",
  size: "small",
};

const LoginForm = () => {
  return (
    <Box className="w-1/3 m-5">
      <Typography variant="h4" className="mb-4">
        Login
      </Typography>
      <form>
        <Stack spacing={2}>
          <TextField {...commonTextFieldProps} id="username" label="Username" />
          <TextField
            {...commonTextFieldProps}
            type="password"
            id="password"
            label="Password"
          />
          <TextField
            {...commonTextFieldProps}
            id="currency"
            select
            label="Currency"
            defaultValue="USD"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <FormControlLabel
          className="my-3"
          value="agree"
          control={<Switch color="primary" />}
          label="Agree"
          labelPlacement="end"
        />
        <Button fullWidth variant="contained" className="mt-4">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
