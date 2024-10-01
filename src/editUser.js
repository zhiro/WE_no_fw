function loadUser() {
    const savedUserData = localStorage.getItem('userData');
    let userData = [];

    if (savedUserData) {
        userData = JSON.parse(savedUserData);
    } else {
        console.log('No user data found!');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const userId = parseInt(urlParams.get('id'));

    const user = userData.find(u => u.id === userId);

    if (user) {
        document.getElementById('editHeader').textContent = `Editing user: ${user.username}`

        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('street').value = user.address.street;
        document.getElementById('suite').value = user.address.suite;
        document.getElementById('city').value = user.address.city;
        document.getElementById('zipcode').value = user.address.zipcode;
        document.getElementById('lat').value = user.address.geo.lat;
        document.getElementById('lng').value = user.address.geo.lng;
        document.getElementById('phone').value = user.phone;
        document.getElementById('website').value = user.website;
        document.getElementById('company').value = user.company.name;
        document.getElementById('catchPhrase').value = user.company.catchPhrase;
        document.getElementById('bs').value = user.company.bs;
    } else {
        console.log('User not found!');
    }
}


function saveUser() {
    const savedUserData = localStorage.getItem('userData');
    let userData = [];

    if (savedUserData) {
        userData = JSON.parse(savedUserData);
    } else {
        console.log('No user data found to save!');
        return;
    }


    const urlParams = new URLSearchParams(window.location.search);
    const userId = parseInt(urlParams.get('id'));


    const userIndex = userData.findIndex(u => u.id === userId);

    if (userIndex !== -1) {

        userData[userIndex] = {
            id: userId,
            name: document.getElementById('name').value,
            username: userData[userIndex].username,
            email: document.getElementById('email').value,
            address: {
                street: document.getElementById('street').value,
                suite: document.getElementById('suite').value,
                city: document.getElementById('city').value,
                zipcode: document.getElementById('zipcode').value,
                geo: {
                    lat: document.getElementById('lat').value,
                    lng: document.getElementById('lng').value,
                }
            },
            phone: document.getElementById('phone').value,
            website: document.getElementById('website').value,
            company: {
                name: document.getElementById('company').value,
                catchPhrase: document.getElementById('catchPhrase').value,
                bs: document.getElementById('bs').value
            }
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = `index.html`;
    } else {
        alert('User not found for saving!');
    }
}

function cancelEdit() {
    window.location.href = `index.html`;
}

window.onload = loadUser;
