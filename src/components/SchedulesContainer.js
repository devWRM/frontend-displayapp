import React, { Component } from 'react';

// import { connect } from 'react-redux';

import SchedulesList from './SchedulesList';



class SchedulesContainer extends Component {
    render() {
        return (
            <div>
                
                <SchedulesList />
            </div>
        )
    }
}



export default SchedulesContainer;
