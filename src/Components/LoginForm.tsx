import { Formik,Form,Field,ErrorMessage } from "formik"
import * as Yup from 'yup';
type ValTypes ={
    name:string;
    age:string;
    email:string;
}
const LoginForm = () => {

    const initialVal ={
        name:"",
        age:"",
        email:"",
    }
    const onSubmit = (values:ValTypes) => {
        console.log(values);
        
    }
    const Schema = Yup.object().shape({
        name:Yup.string().required("Required"),
        age:Yup.string().required("Requiired"),
        email: Yup.string().email('Invalid email format').required('Required'),
    })
    return (
        <div>
            <Formik initialValues={initialVal} onSubmit={onSubmit} validationSchema={Schema}>
                <Form>
                    <div>
                    <label htmlFor="name">Name</label>
                    <Field  name="name" id="name" />
                    <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
                    </div>
                    <div>
                    <label htmlFor="age">Age</label>
                    <Field  name="age" id="age" />
                    
                    <ErrorMessage name="age" render={msg => <div>{msg}</div>} />
                    </div>
                    <div>
                    <label htmlFor="email">Email</label>
                    <Field  name="email" id="email" />
                    <ErrorMessage name="email" render={msg => <div>{msg}</div>} />
                    </div>
                    <button type="submit">Submit</button>
                    </Form>
            </Formik>
        </div>
    )
}

export default LoginForm
