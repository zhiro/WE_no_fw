function fillTableWithUserData(data) {
    const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    data.forEach(user => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        const nameLink = document.createElement('a')
        nameLink.textContent = user.name;
        nameLink.textContent = user.name;
        nameLink.classList.add('clickable-name');
        nameLink.onclick = function() {
            window.location.href = `userView.html?id=${user.id}`;
        };
        nameCell.appendChild(nameLink);
        row.appendChild(nameCell);

        const ageCell = document.createElement('td');
        ageCell.textContent = user.username;
        row.appendChild(ageCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        const addressCell = document.createElement('td');
        addressCell.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}`;
        row.appendChild(addressCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = user.phone;
        row.appendChild(phoneCell);

        const websiteCell = document.createElement('td');
        websiteCell.textContent = user.website;
        row.appendChild(websiteCell);

        const companyCell = document.createElement('td');
        companyCell.textContent = user.company.name;
        row.appendChild(companyCell);

        const actionCell = document.createElement('td');
        actionCell.classList.add('action-cell');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('action-btn');
        editBtn.onclick = function() {
           editUser(user.id);
        };
        actionCell.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('action-btn', 'delete-btn');
        deleteBtn.onclick = function() {
            deleteUser(user.id, row)
        };
        actionCell.appendChild(deleteBtn);

        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });
}

