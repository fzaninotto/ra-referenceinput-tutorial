import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="reference" validate={required()} />
      <TextInput source="thumbnail" fullWidth validate={required()} />
      <ReferenceInput
        source="category_id"
        reference="categories"
        sort={{ field: "name", order: "ASC" }}
      />
      <NumberInput source="price" />
      <TextInput source="description" fullWidth multiline />
      <NumberInput source="width" validate={required()} />
      <NumberInput source="height" validate={required()} />
      <NumberInput source="stock" defaultValue={0} />
    </SimpleForm>
  </Create>
);
