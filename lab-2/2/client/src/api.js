const API_URL = 'http://localhost:3000'; 

// add user
async function addUser(userData) {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData) 
    });
    return await response.json();
}

// del user
async function deleteUser(index) {
    const response = await fetch(`${API_URL}/users/${index}`, {
        method: 'DELETE'
    });
    return await response.json();
}

// edit user
async function modifyUser(index, updatedUserData) {
    const response = await fetch(`${API_URL}/users/${index}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUserData)
    });
    return await response.json();
}