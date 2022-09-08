import StarRating from 'components/StarRating/StarRating';
import { useField } from 'formik';

const FKStarRating = ({ ...props }) => {
  const [field, meta] = useField(props);

  return <StarRating error={meta.touched && meta.error} {...field} {...props} />;
};

export default FKStarRating;
