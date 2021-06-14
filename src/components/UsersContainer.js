import React from 'react';

import { connect } from 'react-redux';

import UsersList from './UsersList.js';
import { fetchUsers } from '../actions/usersActions.js';

class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return(
            <div>

                

                <UsersList />

            </div>
        )
    }

}

export default connect(null, { fetchUsers })(UsersContainer);


