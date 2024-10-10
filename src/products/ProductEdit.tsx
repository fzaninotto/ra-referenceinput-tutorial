import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Stack, InputAdornment } from "@mui/material";
import HeightIcon from "@mui/icons-material/Height";

export const ProductEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="reference" validate={required()} />
        <Stack direction="row" gap={1}>
          <ReferenceInput
            source="category_id"
            reference="categories"
            sort={{ field: "name", order: "ASC" }}
            filter={{ disabled: false }}
          >
            <SelectInput validate={required()} />
          </ReferenceInput>
          <NumberInput
            source="price"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
          />
          <NumberInput
            source="width"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HeightIcon
                    fontSize="small"
                    sx={{ transform: "rotate(90deg)" }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <NumberInput
            source="height"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HeightIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <TextInput source="thumbnail" validate={required()} />
        <TextInput source="description" multiline />
      </SimpleForm>
    </Edit>
  );
};
