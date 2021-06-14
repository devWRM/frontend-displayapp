import React from 'react';

import { connect } from 'react-redux';

function UsersList(props) {

    return(
        <div>

            ALL USERS:
            {
                props.users.map(user =>

                    <li key={user.id}>
                        {user.name}
                    </li>
                
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { users: state.users }
}


export default connect(mapStateToProps)(UsersList);

