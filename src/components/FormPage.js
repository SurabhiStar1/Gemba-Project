import React from 'react';
import { useFormik } from 'formik';

const FormPage = () => {
  const formik = useFormik({
    initialValues: {
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
      field6: '',
      field7: '',
      field8: '',
      field9: '',
      field10: '',
    },

    onSubmit: (values) => {
      console.log(values);
      
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <label htmlFor={`field${index + 1}`}>{`Field ${index + 1}:`}</label>
          <input
            type="text"
            id={`field${index + 1}`}
            name={`field${index + 1}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[`field${index + 1}`]}
            style={{ width: '100%', padding: '5px' }}
          />
          {formik.touched[`field${index + 1}`] && formik.errors[`field${index + 1}`] ? (
            <div style={{ color: 'red' }}>{formik.errors[`field${index + 1}`]}</div>
          ) : null}
        </div>
      ))}

      <button
        type="submit"
        style={{
          backgroundColor: '#303655',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FormPage;
