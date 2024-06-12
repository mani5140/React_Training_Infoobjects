import { IUser } from "../../../interfaces/IUser"

type props = {
    data: IUser;
}

export const User = (props: props) => {
    return (
        <div>
            <img src={props.data.src} alt={props.data.name} />
            <ul>
                {props.data.details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}