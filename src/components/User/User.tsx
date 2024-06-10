import { UserInterface } from "../../usersData"

type UserProps = {
    data: UserInterface;
}

export const User = (props: UserProps) => {
    return (
        <div>
            <img src={props.data.src} />
            <ul>
                {
                    props.data.details.map((item, index) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}