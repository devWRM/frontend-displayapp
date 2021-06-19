import React from 'react'

import { connect } from 'react-redux';
import Rooms from './Rooms.js';
import Cleanings from './Cleanings.js';

function SchedDetailsList(props) {

// debugger;

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
            <b>ALL details for User,Room,Cleaning (SchedDetailsList):</b>
            <br />

            {props.users.length ?               
                props.users.map( user => 
                    <span key={user.id}> 

                        
                        {/* { user.schedules.length ? user.name : null }  */}
                        <b>{user.name}</b>

                        {user.schedules.length ? 
                            
                            user.schedules.map( schedule =>
                                <li key={schedule.id}>
                                    {formattedDate(schedule.dated)}
                                    
                                    <Rooms user={user} schedule={schedule} />
                                    <Cleanings user={user} schedule={schedule} />
                                </li>
                                
                            )
                            
                            : <li>has no schedules</li>
                        }

                    </span>

                )
                
        
                : "There are no users."
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps)(SchedDetailsList);
