import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, RenderField, Button, Alert } from '../../common/components/web';
import { required, email, minLength } from '../../../../../common/validation';

const ContactForm = ({ handleSubmit, submitting, onSubmit, error, sent }) => {
  return (
    <Form name="contact" onSubmit={handleSubmit(onSubmit)}>
      {sent && <Alert color="success">ได้รับอีเมลแล้ว ขอบคุณค่ะ!</Alert>}
      <Field name="ชื่อ" component={RenderField} type="text" label="ขื่อ - สกุล" validate={[required, minLength(3)]} />
      <Field name="อีเมล" component={RenderField} type="text" label="อีเมลของคุณ" validate={[required, email]} />
      <Field
        name="เรื่อง"
        component={RenderField}
        type="textarea"
        label="ท่านต้องการติดต่อเรื่องใด"
        validate={[required, minLength(10)]}
      />
      <div className="text-center">
        {error && <Alert color="error">{error}</Alert>}
        <Button color="primary" type="submit" disabled={submitting}>
          ส่งเลย!
        </Button>
      </div>
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  sent: PropTypes.bool
};

export default reduxForm({
  form: 'contact',
  enableReinitialize: true
})(ContactForm);
