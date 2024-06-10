import { User } from "../User/User";
import './Users.css';
import { UserInterface } from "../../usersData";

type UsersProps = {
    users: UserInterface[];
};

// we can also use Destructuring instead of props
// (props: UsersProps) or  ({users} : UsersProps)

export const Users = (props: UsersProps) => {
    return (
        <div className="users-container">
            {props.users.map((user, index) => (
                <div key={index} className="user-card">
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>

                    {/* conditional rendering || ternary operator */}
                    {user.age >= 18 ? <User data={user}/> : <p>{user.name} is a minor </p>}
                </div>
            ))}
        </div>
    );
};
