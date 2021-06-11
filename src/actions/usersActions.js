


export const fetchUsers = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users`)
        .then(resp => resp.json())
        .then(userObjs => dispatch({ type: 'FETCH_USERS', payload: userObjs }))
        // .then(userObjs => console.log('fetchUsers', userObjs))
    }
}




