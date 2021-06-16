import React from 'react'

import { connect } from 'react-redux';

function SchedulesList(props) {

// debugger
//  props.users[0].schedules[0].dated

    return (
        <div>

            SchedulesList
            
            { props.users.length ? 
                 props.users.map(user => 
                    <p key={user.id}>

                            {/* If the user has schedule(s), map the schedules to return user name with each schedule */}
                            { user.schedules.length ? 
                              
                                user.schedules.map(schedule =>
                                    <p key={schedule.id}>{user.name} "schedule"</p>
                                )

                                : <p>{user.name} "!NOT!"</p>
                            }
                        
                        

                    </p>
                )
                // console.log(props.users[0].schedules[0].active) 
            
            
            
                : "HELLO!!!" 
            }


        </div>
    )
}

const mapStateToProps = (state) => {
    
    return  { users: state.users }
}

export default connect(mapStateToProps)(SchedulesList);
