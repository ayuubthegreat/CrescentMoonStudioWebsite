
import axios from "axios";
import { BASE_DATA } from "../funcs/BASE_DATA";
import { LoginUser } from "../slices/userSlice";
import { setFromExternal } from "../slices/userSlice";


export const APICall = async ({endpoint, method = "GET", data = null}) => {
    try {
        const response = await axios({
            method,
            url: `${BASE_DATA.URL}/${endpoint}`,
            data: data
        })
        return response.data
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
}

export const determineIfRedirectValid = (setRedirectService, dispatch, nav) => {
        const linkParts = window.location.href.split('/');
        if (linkParts.length != 5) {
            setRedirectService(null);
            return false; 
        }
        console.log(linkParts);
        dispatch(setFromExternal(true));
        if (linkParts[4] === "gitspedia") {
            setRedirectService("gitspedia");
        } else {
             nav('/error');
        }
        console.log("Redirect service set to:", setRedirectService);
        return true;
    }
export const LoadingCase = (state) => {
    state.loading = true
    state.error = null
}
export const ProjectsSuccessCase = (state, action) => {
    state.loading = false;
    state.projects = action.payload.data;
    console.log(`Found`, state.projects);
}
export const FailedCase = (state, action) => {
    state.loading = false
    state.error = action.payload
    console.error("Error:", action.payload)
}
