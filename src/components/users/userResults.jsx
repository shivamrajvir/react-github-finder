import { useEffect, useContext } from 'react'
import Spinner from '../common/spinner'
import UserItem from './userItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    const { loading, fetchUsers, users } = useContext(GithubContext)

    useEffect(() => {
        fetchUsers()
    }, [])

    if (!loading) {
        return (
            <div className='grid grid-cols-1 grap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    // <h3 key={user.id}>{user.login}</h3>
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
    else {
        return <Spinner />
    }

}

export default UserResults