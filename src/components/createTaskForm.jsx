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
                            <Label className="formLabel">Assigner</Label>
                            <select className="formInput" onChange={formik.handleChange} values={formik.values.assigner} id="assigner" name="assigner">
                                <option>Please select assigner</option>
                                <option value="3eb220d3-45da-4f21-8a08-d6454a43c7e6">Sara van der Wacht</option>
                                <option value="f4ee9508-7489-487b-83d5-ca8cf41bd473">Regina Drup</option>
                                <option value="f0c98d14-d872-4e8e-bfb6-add3be66bd19">Simon Strand</option>
                                <option value="d490c018-9b23-4c2b-8ad6-b3388e94fb9e">Ernst Jolink</option>
                                <option value="bcd1de03-7d08-4dd5-b5b9-430f3879ab3a">Piet Palmbloom</option>
                                <option value="61feb898-1cad-461c-9599-9251d23cf865">Peter Parasol</option>
                                <option value="f39bf025-1b93-4751-ba87-4f75d9965a96">Support HAMMOCK</option>
                                <option value="b18b24e6-51f8-415b-8fe9-ad1641c8b758">Test</option>
                            </select>
                        </div>
                    </row>
                    <row>
                        <div className="formComponents">
                            <Label className="formLabel" >Assignee</Label>
                            <select className="formInput" onChange={formik.handleChange} values={formik.values.assignee} id="assignee" name="assignee">
                                <option>Please select assignee</option>
                                <option value="3eb220d3-45da-4f21-8a08-d6454a43c7e6">Sara van der Wacht</option>
                                <option value="f4ee9508-7489-487b-83d5-ca8cf41bd473">Regina Drup</option>
                                <option value="f0c98d14-d872-4e8e-bfb6-add3be66bd19">Simon Strand</option>
                                <option value="d490c018-9b23-4c2b-8ad6-b3388e94fb9e">Ernst Jolink</option>
                                <option value="bcd1de03-7d08-4dd5-b5b9-430f3879ab3a">Piet Palmbloom</option>
                                <option value="61feb898-1cad-461c-9599-9251d23cf865">Peter Parasol</option>
                                <option value="f39bf025-1b93-4751-ba87-4f75d9965a96">Support HAMMOCK</option>
                                <option value="b18b24e6-51f8-415b-8fe9-ad1641c8b758">Test</option>
                            </select>
                        </div>
                    </row>

                    <row>
                        <div className="formComponents">
                            <Label className="formLabel" >File</Label>
                            <select className="formInput" onChange={formik.handleChange} values={formik.values.file} id="file" name="file">
                                <option>Please select file</option>
                                <option value="81af4b85-b4ef-40c9-bcfe-c9e73637a106">File 1</option>
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