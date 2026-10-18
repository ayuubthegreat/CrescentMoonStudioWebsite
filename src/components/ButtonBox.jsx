import { Link } from "react-router-dom";
import './components.css'
export default function ButtonBox({buttonTextArr = [""], linkArr = [""], onClick = () => {}}) {

    return (
        <>
        <div className="buttonBox">
             {(buttonTextArr.map((val, i) => (
            <>
            <Link to={linkArr[i]} onClick={onClick}>{val}</Link>
            </>
        )))}
        </div>
       
        </>
    )
}