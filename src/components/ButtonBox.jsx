import { Link } from "react-router-dom";
import './components.css'
export default function ButtonBox({add_class = "", buttonTextArr = [""], linkArr = [""], onClick = () => {}}) {

    return (
        <>
        <div className={`buttonBox ${add_class}`}>
             {buttonTextArr.map((val, i) => (
                <Link key={`${linkArr[i]}-${i}`} to={linkArr[i]} onClick={onClick}>{val}</Link>
            ))}
        </div>
       
        </>
    )
}