import React from 'react'

function Rooms(props) {
    let room = props.user.rooms.find( room => {
        if (props.schedule.room_id == room.id) return room
    })

    return (
        <div>
            {room.name}
        </div>
    )
}

export default Rooms;
