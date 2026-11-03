import './createUpdateProject.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema, UpdateProject, AddProject } from "../slices/projectsSlice";
import Section from '../components/Section';

export const CreateUpdateProjectPage = ({project = null}) => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(projectSchema),
        defaultValues: project || {
            title: "A project",
            description: "A project description.",
            shortDesc: "A short project description.",
            gitspedia_href: "https://www.gitspedia.org",
            release_date: new Date().toISOString().split("T")[0],
            tags: "software",
            percentage: 0,
            relative_image_link: "../assets/cmsLogo.png"
        }
    });
    const dispatch = useDispatch();
    const nav = useNavigate();
    const isEditing = project !== null;
    const [currentPage, setCurrentPage] = useState(0);
    const onSubmit = async (data) => {
        // Handle form submission here
        console.log(data);
        data.id = project.id;
        try {
            if (isEditing) {
                await dispatch(UpdateProject(data)).unwrap();
            } else {
                await dispatch(AddProject(data)).unwrap();
            }
            nav("/projects");
        } catch (error) {
            console.error(error);
        }
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
                <label htmlFor="description">Long Description</label>
                <textarea id="description" {...register("description")}></textarea>
                {errors.description && <span className="error">{errors.description.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="gitspedia_href">Gitspedia Link</label>
                <input id="gitspedia_href" {...register("gitspedia_href")} />
                {errors.gitspedia_href && <span className="error">{errors.gitspedia_href.message}</span>}
            </div>
        </div>
        </>),
        (<>
        <div key="form-page-2" className="form-page">
            <div className='form-group'>
                <label>Release Date</label>
                <input type="date" id="release_date" {...register("release_date")} onChange={(e) => setValue("release_date", e.target.value)} />
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
                <label htmlFor="relative_image_link">Display Image Link</label>
                <input id="relative_image_link" {...register("relative_image_link")} />
                {errors.relative_image_link && <span className="error">{errors.relative_image_link.message}</span>}
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