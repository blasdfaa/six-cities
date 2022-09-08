import TextArea from 'components/TextArea/TextArea';
import { useField } from 'formik';

const FKTextarea = (props) => {
  const [field, meta] = useField(props);

  return <TextArea error={meta.touched && meta.error} {...field} {...props} />;
};

export default FKTextarea;
