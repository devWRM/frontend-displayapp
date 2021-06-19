import React from 'react'

function Rooms(props) {
    let room = props.user.rooms.find( room => {
        if (props.schedule.room_id == room.id) return room
    })

    // function thisRoom(user, schedule) {
    //     user.rooms.find(room => room.id == schedule.room_id)
    // }
    // const xRoom = thisRoom(props.user, props.schedule)

    // debugger;
    // console.log(props.user.rooms)

    return (
        <div>
            {room.name}
            {/* {props.room ? 
                props.room.map( room =>
                    <p>ROOM: {room.name}</p>
                )
        
                : null
            } */}

        </div>
    )
}

export default Rooms;
