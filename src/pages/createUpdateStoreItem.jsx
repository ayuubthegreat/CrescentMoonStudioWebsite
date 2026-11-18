import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { storeItemSchema } from "../slices/storeSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import './createUpdateStoreItem.css'


export const Create_UpdateStoreItemPage = ({storeItem}) => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(storeItemSchema),
        defaultValues: storeItem ?? {
            name: "Store Item",
            description: "A store item description.",
            price: 5.0,
            stock: 0,
            type: "Software",
            ageRating: "AA",
            imageContent: [],
            subscriptionDuration: -1,
        }
    });
    const dispatch = useDispatch();
    const isEditing = !!storeItem;
    const [formPageIndex, setFormPageIndex] = useState(0);
    const {fields: imageContentFields, append: appendImageContent, remove: removeImageContent} = useFieldArray({
        control,
        name: "imageContent"
    });
    const formPages = [
        (<>
            <div key="form-page-1" className="form-page">
                <div className="form-group">
                    <label>Item Name</label>
                    <input {...register("name")}/>
                     {errors.title && <span className="error">{errors.title.message}</span>}
                </div>
                <div className="form-group">
                    <label>Item Description</label>
                    <input {...register("description")}/>
                </div>
                <div className="form-group">
                    <label>Item Price</label>
                    <input type="number" min={1} {...register("price", {valueAsNumber: true})}/>
                </div>
                  <div className="form-group">
                    <label>Item Stock</label>
                    <input type="number" min={0} {...register("stock", {valueAsNumber: true})}/>
                </div>
            </div>
        </>),
        (<>
        <div key="form-page-2" className="form-page">
            <div className="form-group">
                <label>Item Type</label>
                <select {...register("type")}>
                    <option>Book</option>
                    <option>Software</option>
                    <option>Subscription</option>
                </select>
            </div>
            <div className="form-group">
                <label>Item Age Rating</label>
                <select {...register("ageRating")}>
                    <option>AA</option>
                    <option>10+</option>
                    <option>15+</option>
                </select>
            </div>
        </div>
        </>),
        (<>
        <div key="form-page-3" className="form-page">
            <div className="form-group">
                <label>Item Image Content</label>
                <div className="form-arr-group-parent" style={{maxHeight: "300px"}}>
                  {imageContentFields.map((field, index) => (
                    <div key={field.id} className="form-group">
                        <input {...register(`imageContent.${index}.relativeUrl`)} placeholder="Relative URL"/>
                        <input {...register(`imageContent.${index}.altText`)} placeholder="Alt Text"/>
                        <button type="button" onClick={() => removeImageContent(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={() => appendImageContent({relativeUrl: "", altText: ""})}>Add Image</button>  
                </div>
                  <p>{imageContentFields.length} images added</p>
                
                
            </div>
        </div>
        </>)
    ]
    const onSubmit = (data) => {
        console.log(data);
        try {
        
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
        <div className="form-header">
                <h1>{isEditing ? "Update" : "Create"} Store Item</h1>
                <p>{isEditing ? "Update the details of the store item " + storeItem.name : "Create a new store item"} for Crescent Store</p>
            </div>
        <div className="create-update-item-page">
            
            <form onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}>
                {formPages[formPageIndex]} 
                <div className="navigation-panel">
                    <button type="button" onClick={() => {setFormPageIndex(Math.max(formPageIndex - 1, 0))}}>Previous</button>
                    <p>{formPageIndex + 1}/{formPages.length}</p>
                    <button onClick={() => {setFormPageIndex(Math.min(formPageIndex + 1, formPages.length - 1))}} type="button">Next</button>
                    <button type="submit">{isEditing ? "Update" : "Create"}</button>
                </div> 
            </form>
        </div>
        </>
    )
}