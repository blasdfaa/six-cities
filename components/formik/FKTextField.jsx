import TextField from 'components/TextField/TextField';
import { useField } from 'formik';

const FKTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return <TextField label={label} error={meta.touched && meta.error} {...field} {...props} />;
};

export default FKTextField;
