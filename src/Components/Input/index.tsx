import "./style.css"
import {InputHTMLAttributes} from "react"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string;
    isNumber?: boolean;
}
function Input  ({label,placeholder,isNumber,...rest}:InputProps){
    return(
        <div className="ContainerInput">
            {label &&
            <label>{label}</label>
            }
            {isNumber &&
            <input {...rest} className="Input" type="number" placeholder={placeholder} />
            }
            {!isNumber &&
            <input {...rest} className="Input" type="text" placeholder={placeholder} />
            }
        </div>
    )
}
export default Input