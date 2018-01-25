import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormView, RenderField, FormButton } from '../../common/components/native';
import { required, email, minLength } from '../../../../../common/validation';

const ContactForm = ({ handleSubmit, valid, onSubmit }) => {
  return (
    <FormView>
      <Field name="ชื่อ" component={RenderField} type="text" label="ชื่อของคุณ" validate={[required, minLength(1)]} />
      <Field name="อีเมล" component={RenderField} type="text" label="อีเมลของคุณ" validate={[required, email]} />
      <Field
        name="เรื่อง"
        component={RenderField}
        type="textarea"
        label="ท่านต้องการติดต่อเรื่องใด"
        validate={[required, minLength(10)]}
      />
      <FormButton onPress={handleSubmit(onSubmit)} disabled={!valid}>
        ส่ง
      </FormButton>
    </FormView>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  valid: PropTypes.bool
};

export default reduxForm({
  form: 'contact',
  enableReinitialize: true
})(ContactForm);
