import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { type FormSkills } from '../../types';



const SkillsForm = (): JSX.Element => {

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Skill name is required'),
    range: Yup.number()
      .required('Skill range is required')
      .min(10, 'Skill range must be at least 10')
      .max(100, 'Skill range must be at most 100'),
  });

  const handleSubmit = (values: FormSkills): void => {
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills != null) {
      const existingSkills = JSON.parse(storedSkills);
      const updatedSkills = [...existingSkills, values];
      localStorage.setItem('skills', JSON.stringify(updatedSkills));
    } else {
      localStorage.setItem('skills', JSON.stringify([values]));
    }
  };

  return (
    <Formik 
      initialValues={{
        name: '',
        range: 10,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        setSubmitting(false);
        resetForm()
      }
      }
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='field'>
            <label htmlFor="name">Skill name</label>
            <Field id="name" name="name" placeholder="Enter skill name" />
          </div>
          <ErrorMessage name="name" component="div" className='error-message'/>

          <div className='field'>
            <label htmlFor="range">Skill range</label>
            <Field id="range" name="range" placeholder="Enter skill range" />
          </div>
          <ErrorMessage name="range" component="div" className='error-message'/>

          <button className='btn' type="submit" disabled={isSubmitting}>
             Add skill
          </button>
        </Form>
      )}
    </ Formik>
  )
}

export default SkillsForm