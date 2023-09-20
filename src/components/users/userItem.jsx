import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className='card shadow-md compact side bg-base-100 m-2'>
            <div className="flex-row iterms-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img url={avatar_url} alt='profile' />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{login}</h2>
                    <Link className='text-base-content text-opacity-40' to={`/users/${login}`}>Visit profile</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem