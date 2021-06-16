import React from 'react'

import { connect } from 'react-redux';

function ActiveUsersList(props) {
    
    let activeUsers;

    if(props.users.length) {

        activeUsers = props.users.filter( user => user.active )

        return (
            <div>
                <b>ONLY ACTIVE USERS (ActiveUsersList): total {activeUsers.length}</b>
                    
                    { activeUsers.map( user => 
                                               
                                <li key={user.id}>
                                    
                                   { user.name }
    
                                </li>
                            
                        )
                                                    
                    }
    
    
            </div>
        )

    } else {
        return(
            <div>"There are no users."</div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps)(ActiveUsersList);
