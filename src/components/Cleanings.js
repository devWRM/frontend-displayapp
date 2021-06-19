import React from 'react'

function Cleanings(props) {
    let cleaning = props.user.cleanings.find( cleaning => {
            if(props.schedule.cleaning_id === cleaning.id) return cleaning
    })


    return (
        <div>
            {cleaning.action}
        </div>
    )
}

export default Cleanings
