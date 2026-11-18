import { useState } from 'react'
import './businessLogPage.css'
import {useFieldArray, useForm, useWatch} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddBusinessLog, businessLogSchema, DeleteBusinessLogs, UpdateBusinessLog } from '../slices/businessLogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { string } from 'zod'


export const CreateBusinessLogPage = ({businessLog = null}) => {
    const {
        register,
        control,
        reset,
        formState: {errors},
        handleSubmit,
        getValues,
        setValue,
    } = useForm({
        resolver: zodResolver(businessLogSchema),
        defaultValues: businessLog || {
            title: "A business log",
            content: "Content (must be in valid HTML)",
            tags: [],
            authors: [], 
        }
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authors = useWatch({control, name: "authors"}) ?? [];
    const tags = useWatch({control, name: "tags"}) ?? [];
    const formPages = [
        (<>
        <formPage>
            <div className='form-group'>
                    <label>Title</label>
                    <input {...register("title")}/>
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div className='form-group'>
                     <label>Content</label>
                    <textarea {...register("content")}/>
                     {errors.content && <p>{errors.content.message}</p>}
                </div>
                 
        </formPage>
        </>),
        (<>
        <formPage>
            <div className='form-group'>
                     <label>Tags</label> 
                     <appendableList>
                    {tags.map((tag, i) => {
                        return (
                            <>
                           
                                <button type='button' onClick={() => {
                                    setValue('tags', [...getValues('tags')].filter((val, index) => index !== i), {shouldDirty:true})
                                }}>
                                    Delete
                                </button>
                                <input {...register(`tags.${i}`)}/>
                            
                            </>
                        )
                    })}
                    </appendableList>
                    <buttonNav>
                        <button type='button' onClick={() => {
                            setValue("tags", [...getValues('tags'), ""], {shouldDirty : true});
                        }}>Add</button>
                    </buttonNav>
                </div>
            <div className='form-group'>
                <label>Authors: </label>
                <appendableList>
                    {authors.map((author, i) => (
  <div key={i}>
    <button
      type="button"
      onClick={() =>
        setValue(
          "authors",
          authors.filter((_, index) => index !== i),
          { shouldDirty: true }
        )
      }
    >
      Delete
    </button>
    <input {...register(`authors.${i}`)} />
  </div>
))}

<button
  type="button"
  onClick={() => setValue("authors", [...authors, ""], { shouldDirty: true })}
>
  Add
</button>
                </appendableList>
                
            </div>
        </formPage>
        </>)
    ]
    const onSubmit = async (data) => {
        console.log(data);
        try {
           
            if (businessLog === null) {
                await dispatch(AddBusinessLog(data)).unwrap();
            } else { 
                data.id = businessLog.id;
                await dispatch(UpdateBusinessLog(data)).unwrap();
            }
            navigate('/business-logs');
            window.scrollTo({top: 0})

        } catch (error) {
            console.error(error);
        }
    }
    const [formPageIndex, setFormPageIndex] = useState(0);
    return (
        <>
        <page className="business-log-page">
            <div className="business-log-page-header">
                <h1>Create Business Log</h1>
            </div>
            <form className='business-log-page-form' onSubmit={handleSubmit(onSubmit)}>
                {formPages[formPageIndex]}
            <buttonNav>
                <button type='button' disabled={formPageIndex === 0} onClick={(e) => {
                    setFormPageIndex(Math.max(0, formPageIndex - 1));
                }}>Previous</button>
                <p>{formPageIndex + 1}/{formPages.length}</p>
                <button type='button' disabled={formPageIndex === formPages.length - 1} onClick={(e) => {
                     setFormPageIndex(Math.min(formPages.length - 1, formPageIndex + 1))
                }}>Next</button>
                <button type='submit'>{businessLog === null ? "Submit " : "Update"}</button>
            </buttonNav> 
            </form>
           
        </page>
        </>
    )

}

export const BusinessLogPage = () => {
    const {logs} = useSelector((state) => state.logs);
    const {user} = useSelector((state) => state.user);
    const [selectedArticleIndex, setSelectedArticleIndex] = useState(-1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const stringAuthors = (authors = []) => {
        if (authors.length === 0)
            return "";
        let finalStr = authors[0];
        for (let i = 1; i < authors.length; i++) {
            finalStr += ", " + authors[i]
        }
        return finalStr;
    }
    return (
        <>
       {selectedArticleIndex !== -1 && logs[selectedArticleIndex] != null && (<>
                <backdrop>
            <popup className="business-log-popup">
                <button onClick={() => {setSelectedArticleIndex(-1);}}>Close Business Log</button>
                <h1>{logs[selectedArticleIndex].title}</h1>
                <h4>by {stringAuthors(logs[selectedArticleIndex].authors)}</h4>
                <tagList>
                    {[...logs[selectedArticleIndex].tags].map((val, i) => {
                        return (
                            <>
                            <tag>{val}</tag>
                            </>
                        )
                    })}
                </tagList>
                <p dangerouslySetInnerHTML={{__html: logs[selectedArticleIndex].content}}></p>
            </popup>
        </backdrop>
       </>)} 
        <div>
        {user && user.role === "SUPERADMIN" && (<>
        <Link to={"/create/business-log"}>Create Business Log</Link>
        </>)}
        </div>
        <list>
            {logs.length === 0 && (<>
            <p className='error'>No business logs have been logged. <br></br> Please check back in a little while!</p>
            </>)}
            {logs.length > 0 && [...logs].map((val, i) => {
                return (
                    <>
                    
                    
                    
                    <listItem>
                        <buttonNav>
                       {user && user.role === "SUPERADMIN" && (<>
                    <button onClick={() => {
                            dispatch(DeleteBusinessLogs(val.id));
                            setSelectedArticleIndex(-999);
                        }}>Delete</button>
                    <button onClick={() => {
                        navigate(`/edit-business-log/${val.id}`)
                    }}>
                        Update Article
                    </button>
                    </>)} 
                    <button onClick={() => {
                        if (selectedArticleIndex > -2)  {
                            setSelectedArticleIndex(i);
                        }
                        
                    }}>View Log</button>
                    </buttonNav>
                        <p>{val.createdAt}</p>
                       <h1>{val.title}</h1>
                       <h2>by {stringAuthors(val.authors)}</h2>
                    </listItem>
                    </>
                )
            })}
        </list>
            
        </>
    )
}