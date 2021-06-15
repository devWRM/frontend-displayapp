import React from 'react'

import { connect } from 'react-redux';

function SchedulesList(props) {

// debugger
//  props.users[0].schedules[0].dated

    return (
        <div>

            SchedulesList
            {/* { props.users.length ? console.log(props.users[0].schedules[0].active) : console.log("HELLO!!!") } */}

            { props.users.length ? 
                 props.users.map(user => 
                    <p key={user.id}>

                        {/* { user.schedules[0].active ? "active" : "NOT active" } */}

                         
                            { user.schedules.length ? 
                           
                                user.schedules.map(schedule =>
                                    <p key={schedule.id}>{user.name} "schedule"</p>
                                )

                                : "!NOT!"
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
