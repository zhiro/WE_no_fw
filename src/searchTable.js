function searchTable() {
    const input = document.getElementById('searchUser').value.toLowerCase();
    const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    const filteredData = userData.filter(user => {
        return user.name.toLowerCase().includes(input) ||
            user.username.toLowerCase().includes(input) ||
            user.email.toLowerCase().includes(input) ||
            user.phone.toLowerCase().includes(input);
    });

    fillTableWithUserData(filteredData);

}