import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';
import { useFormik } from "formik"
import "./createTaskForm.css"
import { Link } from 'react-router-dom';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';


const CreateTaskForm = () => {

    const formik = useFormik({
        initialValues: {
            description: "",
            date: "",
            performer: "",
            client: "",
            file: "",
            status: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    
    return (
        <>
            <div>
                <form className="formStyling" onSubmit={formik.handleSubmit}>
                    <row>
                        <div className="formComponents">
                            <Label className="formLabel" >Description</Label>
                            <textarea className="formDescr" onChange={formik.handleChange} values={formik.values.description} type="textfield" id="description" name="description" />
                        </div>
                    </row>
                    <row>
                        <div className="formComponents">
                            <Label className="formLabel " >Date</Label>
                            <input className="formDate" onChange={formik.handleChange} values={formik.values.date} type="date" id="date" name="date" />
                        </div>
                    </row>
                    <row>
                        <div className="formComponents">
                            <Label className="formLabel">Performer</Label>
                            <select className="formInput" onChange={formik.handleChange} values={formik.values.performer} id="performer" name="performer">
                                <option>Test Account</option>
                                <option>Test2</option>
                            </select>
                        </div>
                    </row>
                    <row>
                    <div className="formComponents">
                    <Label className="formLabel" >Client</Label>
                        <select className="formInput" onChange={formik.handleChange} values={formik.values.client} id="client" name="client">
                            <option>Test Account</option>
                            <option>Test2</option>
                        </select>
                        </div>
                        </row>
                        
                    <row>
                    <div className="formComponents">
                    <Label className="formLabel" >File ID</Label>
                       <select className="formInput" onChange={formik.handleChange} values={formik.values.file} id="file" name="file">
                            <option>Dummy File</option>
                            <option>Dummy File 2</option>
                        </select> 
                        </div>
                        </row>
                    <row>
                    <div className="formComponents">
                    <Label className="formLabel">Status</Label>
                         <select className="formInput" onChange={formik.handleChange} values={formik.values.status} id="status" name="status">
                            <option>Open</option>
                            <option>Completed</option>
                          </select>
                           </div>
                    </row>
                    <PrimaryButton className="formBtns" text="Save" type="submit" />
                    <Link to="/">
                        <DefaultButton className="formBtns" text="Cancel" />
                    </Link>
                </form>
            </div>
        </>
    )
}

export default CreateTaskForm