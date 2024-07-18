import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("* Required")
      .min(3, "* Too short")
      .max(50, " *Too long"),
    number: Yup.string()
      .required("* Required")
      .matches(/^\d{3}-\d{2}-\d{2}$/, " *Invalid phone number format"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={css.contactForm}>
        <label className={css.nameLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.usernameInput}
          type="text"
          id={nameFieldId}
          name="name"
        />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label className={css.numberLabel} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.phoneInput}
          type="tel"
          id={numberFieldId}
          name="number"
        />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
