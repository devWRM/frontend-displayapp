import React from 'react'

import { connect } from 'react-redux';

function SchedulesList(props) {

    // https://stackoverflow.com/questions/11591854/format-date-to-mm-dd-yyyy-in-javascript
    function formattedDate(date) {
        let sliceDate = date.slice(0,10)
        let splitDate = sliceDate.split("-")
        let year = splitDate[0];
        let month = splitDate[1];
        let day = splitDate[2];
      
        return month + '/' + day + '/' + year;
    }

    return (
        <div>

            <b>ALL USERS & THEIR SCHEDULE(S) (SchedulesList):</b>
            
            { props.users.length ? 
                 props.users.map(user => 
                    <p key={user.id}>

                            {/* If the user has schedule(s), map the schedules to display user name with each schedule */}
                            { user.schedules.length ? 
                              
                                user.schedules.map(schedule =>
                                    <p key={schedule.id}>{user.name} - schedule {formattedDate(schedule.dated)}</p>
                                )

                                : <p>{user.name} has NO schedules</p>
                            }
                        
                    </p>
                )
                // console.log(props.users[0].schedules[0].active) 
                       
                : "There are no users" 
            }


        </div>
    )
}

const mapStateToProps = (state) => {  
    return  { users: state.users }
}

export default connect(mapStateToProps)(SchedulesList);
