import "./style.css"
interface CardProps{
    name: string;
    age: number;
    hobby:string;
}
function Card ({name,age,hobby}:CardProps){
    return(
        <ul className="ContainerCard">
            <li>{name}</li>
            <li>{age} Anos</li>
            <li>{hobby}</li>
        </ul>
    )
}
export default Card