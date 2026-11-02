import './createUpdateProject.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "../slices/projectsSlice";
import Section from '../components/Section';

export const CreateUpdateProjectPage = ({project = null}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(projectSchema)
    });
    const isEditing = project !== null;
    const [currentPage, setCurrentPage] = useState(0);
    const onSubmit = (data) => {
        // Handle form submission here
    };
    const formPages = [
        (<>
        <div className="form-page">
            <div className="form-group">
                <label htmlFor="title">Project Name</label>
                <input id="title" {...register("title")} />
                {errors.title && <span className="error">{errors.title.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="description">Project Description</label>
                <textarea id="description" {...register("description")} />
                {errors.description && <span className="error">{errors.description.message}</span>}
            </div>
        </div>
        </>)
    ]
    return (
        <>
            <Section title={isEditing ? "Update Project" : "Create Project"} description={isEditing ? "Update the details for your project below." : "Fill in the details for your new project below."}/>
            <div className="create-update-project-page">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {formPages[currentPage]}
                    <div className="form-navigation">
                    <button type="button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>Previous</button>
                    <p>{currentPage + 1} / {formPages.length}</p>
                    <button type="button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === formPages.length - 1}>Next</button>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}