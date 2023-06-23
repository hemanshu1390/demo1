// // Synchronous validation
// const validate = (values, props /* only available when using withFormik */) => {
//     const errors = {};
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     //...
  
//     return errors;
//   };
  
//   // Async Validation
//   const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
//   const validate = (values, props /* only available when using withFormik */) => {
//     return sleep(2000).then(() => {
//       const errors = {};
//       if (['admin', 'null', 'god'].includes(values.username)) {
//         errors.username = 'Nice try';
//       }
//       // ...
//       return errors;
//     });
//   };

import React from 'react';
import { Formik } from 'formik';
import { Button, Input } from '@material-tailwind/react';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="">email</label>
          <Input
          variant='standard'
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="">pass</label>
          <Input
          variant='standard'
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;