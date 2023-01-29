import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const SignupForm = () => {
    const [form, setForm] = useState({name:"", phone:"",address: "" })
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("please enter your name"),
        phone: Yup.string().required("please enter your phone").min(10).max(11),
        address: Yup.string().required("please enter your address").min(3)
    });
    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
        console.log(form)
    }
  return (
    <div className='container'>
        <Formik
        initialValues={form}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(value) => {
            console.log(value)
        }}

        >
            <Form>
                <p>Name</p>
                <Field name="name" placeholder="Enter your name" value={form.name || ""} onChange={handleChange}></Field>
                <ErrorMessage name='name' component="span" className="text-danger"></ErrorMessage>
                <p>Phone</p>
                <Field name="phone" placeholder="Enter your phone" value={form.phone || ""} onChange={handleChange}></Field>
                <ErrorMessage name='phone' component="span" className="text-danger"></ErrorMessage>
                <p>Address</p>
                <Field name="address" placeholder="Enter your address" value={form.address || ""} onChange={handleChange}></Field>
                <ErrorMessage name='address' component="span" className="text-danger"></ErrorMessage>
                <br/><br/>
                <button type="submit" className='btn btn-success'>Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default SignupForm;