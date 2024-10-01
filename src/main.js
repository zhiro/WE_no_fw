let userData = [];

document.getElementById('searchUser').addEventListener('keyup', searchTable);

function addNewUser(){
    window.location.href = `addUser.html`;
}


function editUser(userId){
    window.location.href = `editUser.html?id=${userId}`;
}


function deleteUser(userId, row) {
    userData = userData.filter(user => user.id !== userId);
    localStorage.setItem('userData', JSON.stringify(userData));
    row.remove();
}


window.onload = loadUserData;