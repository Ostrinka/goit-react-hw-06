import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";

export default function ContactForm({onAdd}) {
  const initialValues = {
    name: "",
    number: ""
};
const userSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!")
    .max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!")
    .max(50, "Too Long!").required("Required")
});
const fieldId = useId();
    const handleSubmit = (values, actions) => {
        actions.resetForm();
        onAdd({
          id: nanoid(),
          name: values.name,
          number: values.number
        });
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label  htmlFor={`${fieldId}-name`}>Name</label>
            <Field type="text" name="name" id={`${fieldId}-name`}/>
            <ErrorMessage name="name" component="span" className={css.error}/>
          </div>
          <div className={css.wrapper}> 
            <label  htmlFor={`${fieldId}-number`}>Number</label>
            <Field type="text" name="number" id={`${fieldId}-number`}/>
            <ErrorMessage name="number" component="span" className={css.error}/>
          </div>
          <button className={css.btn} type="submit">Add contact</button>
        </Form>
      </Formik>
    )  
}

