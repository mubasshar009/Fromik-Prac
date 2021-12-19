import { Formik ,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
type InitialData = {
    name:string;
    age:number
}


const UserForm = () => {
    const initialValues:InitialData = {
        name:"",
        age:0,
    }
    const handleSubmit = (values:InitialData) => {
        console.log(values);
        
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .min(4, 'Too Short!')
          .max(15, 'Too Long!')
          .required('Required'),
        age: Yup.number()
          .required('Required'),
    })
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form>
                <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" render={msg => <div>{msg}</div>}/>
                </div>
                <div>
                <label htmlFor="age">Age</label>
                <Field type="number" name="age" id="age" />
                <ErrorMessage name='age' render={msg => <div>{msg}</div>} />
                <br />
                <button type="submit">Submit</button>
                </div>
            </Form>
            </Formik>
        </div>
    )
}

export default UserForm
