import { useEffect, useState } from 'react';
import User from './../components/User';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from './../actions/usersAction';

function Users() {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users );

    // Local state
    // const [users, setUsers] = useState(() => []);

    async function fetchUsers(){
        let resp = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await resp.json();
        // setUsers(data); // set Local state

        dispatch(setUsers(data))
    }

    useEffect(() => {
        console.log(users);
    }, [users])

    return (
        <main className="user-view">
            <h1>Users</h1>
            <button onClick={fetchUsers}>Fetch users</button>
            <section className="users" if={users.length}>
                {users.map(user => <User user={user} key={user.id} />)}
            </section>
        </main>
    )
}


export default Users;