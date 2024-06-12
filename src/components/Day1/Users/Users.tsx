import { User } from "../User/User";
import './Users.css';
import { IUser } from "../../../interfaces/IUser";

type props = {
    users: IUser[];
};

export const Users = (props: props) => {
    return (
        <div className="users-container">
            {props.users.map((user, index) => (
                <div key={index} className="user-card">
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>
                    {user.age >= 18 ? <User data={user} /> : <p>{user.name} is a minor </p>}
                </div>
            ))}
        </div>
    );
};
