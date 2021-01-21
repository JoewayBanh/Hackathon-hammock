import { useFormik } from "formik"
import "./createTaskForm.css"


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
            <div className="ms-Grid" dir="ltr">
                <form onSubmit={formik.handleSubmit}>
                    <div className="ms-Grid-row">
                        <div>
                            <label htmlFor="description">Description</label>
                        </div>
                        <input onChange={formik.handleChange} values={formik.values.description} type="textfield" id="description" name="description" />
                    </div>
                    <div className="ms-Grid-row">
                        <div>
                            <label htmlFor="date">Date</label>
                        </div>
                        <input onChange={formik.handleChange} values={formik.values.date} type="text" id="date" name="date" />
                    </div>
                    <div className="ms-Grid-row">
                        <div>
                            <label htmlFor="performer">Performer</label>
                        </div>
                        <select onChange={formik.handleChange} values={formik.values.performer} id="performer" name="performer" />
                    </div>
                    <div className="ms-Grid-row">
                        <div>
                            <label htmlFor="client">Client</label>
                        </div>
                        <select onChange={formik.handleChange} values={formik.values.client} id="client" name="client" />
                    </div>
                    <div className="ms-Grid-row">
                        <div>
                            <label htmlFor="file">File ID</label>
                        </div>
                        <select onChange={formik.handleChange} values={formik.values.file} id="file" name="file" />
                    </div>
                    <div className="ms-Grid-row">
                        <div>
                            <label htmlFor="status">Status</label>
                        </div>
                        <select onChange={formik.handleChange} values={formik.values.status} id="status" name="status">
                            <option value="Day">Day</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                    </div>
                    <button type="submit">Save</button>
                    <button>Cancel</button>
                </form>
            </div>
        </>
    )
}

export default CreateTaskForm