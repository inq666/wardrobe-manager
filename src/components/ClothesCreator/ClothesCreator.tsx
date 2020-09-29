import React from 'react';
import { IClothes } from '../../interfaces';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

type Props = {
  onAddClothes(): void,
}

type InputProps = {
  input: {
    value: string
  }
  meta: {

  }
}

const UploadFile: React.FC<InputProps> = ({ input: { value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => {
  return (
    <input type='file' {...inputProps} {...props} />
  )
};

const ClothesCreatorForm: React.FC<Props & InjectedFormProps<{}, Props>> = (props) => {
  return (
    <form>
      <Field
        name="file"
        className="form-control-file mt-3"
        component={UploadFile}
      />
      <Field
        name="title"
        className="form-control mt-3 mb-3"
        component="input"
      />
      <button
        className="btn btn-primary btn-lg btn-block"
        type="button"
        onClick={props.onAddClothes}
      >
        ADD NEW CLOTHES
   </button>
    </form>
  )
}
export default reduxForm<{}, Props>({
  form: 'clothesCreator'
})(ClothesCreatorForm)
