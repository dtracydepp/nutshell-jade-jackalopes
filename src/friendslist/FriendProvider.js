let friends = []

export const getFriends = () => {
    return fetch("http://localhost:8088/friends")
        .then(response => response.json())
        .then(parsedFriends => {
            news = parsedFriends
            console.log(parsedFriends)
        })

}


export const useFriends = () => {
    return friends.slice()
}

export const addFriends=(friends) => {
    return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friends)
        })
        .then(getFriends)
    
        .then(dispatchStateChangeEvent) 
    }

    
    export const deleteFriend = userId => {
        return fetch(`http://localhost:8088/friends/${userId}`, {
            method: "DELETE"
        })
            .then(getFriends)
    
    }