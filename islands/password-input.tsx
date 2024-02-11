import { FormField, FormFieldType } from "rfui";

export const PasswordInput = ({ ...rest }: Omit<FormFieldType, "type">) => {
  return <FormField type="rfui-password-input" {...rest} />;
};
