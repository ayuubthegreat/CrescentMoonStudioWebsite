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
        console.log(data);
    };
    const formPages = [
        (<>
        <div key="form-page-1" className="form-page">
            <div className="form-group">
                <label htmlFor="title">Name</label>
                <input id="title" {...register("title")} />
                {errors.title && <span className="error">{errors.title.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="description">Short Description</label>
                <textarea id="description" {...register("shortDesc")} />
                {errors.shortDesc && <span className="error">{errors.shortDesc.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea id="desc" {...register("desc")}></textarea>
                {errors.desc && <span className="error">{errors.desc.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="gitspediaLink">Gitspedia Link</label>
                <input id="gitspediaLink" {...register("gitspediaLink")} />
                {errors.gitspediaLink && <span className="error">{errors.gitspediaLink.message}</span>}
            </div>
        </div>
        </>),
        (<>
        <div key="form-page-2" className="form-page">
            <div className='form-group'>
                <label>Release Date</label>
                <input type="date" id="release_date" {...register("release_date", {valueAsDate: true})} />
                {errors.release_date && <span className="error">{errors.release_date.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input id="tags" {...register("tags")} />
                {errors.tags && <span className="error">{errors.tags.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="percentage">Completion Percentage</label>
                <input id="percentage" type="number" {...register("percentage", {valueAsNumber: true})} />
                {errors.percentage && <span className="error">{errors.percentage.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="display_img_link">Display Image Link</label>
                <input id="display_img_link" {...register("display_img_link")} />
                {errors.display_img_link && <span className="error">{errors.display_img_link.message}</span>}
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