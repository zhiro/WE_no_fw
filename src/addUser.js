
let userData = [];
const savedUserData = localStorage.getItem('userData');

if (!savedUserData) {
    console.log('No user data found!');
} else {
    userData = JSON.parse(savedUserData);
}


document.getElementById('addUser').addEventListener('click', function() {

    const newUser = {
        id: userData.length + 1,
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        address: {
            street: document.getElementById('street').value,
            suite: document.getElementById('suite').value,
            city: document.getElementById('city').value,
            zipcode: document.getElementById('zipcode').value,
            geo: {
                lat: document.getElementById('lat').value,
                lng: document.getElementById('lng').value
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

    userData.push(newUser);
    localStorage.setItem('userData', JSON.stringify(userData));


    document.getElementById('name').value = '';
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('street').value = '';
    document.getElementById('suite').value = '';
    document.getElementById('city').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('lat').value = '';
    document.getElementById('lng').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('website').value = '';
    document.getElementById('companyName').value = '';
    document.getElementById('catchPhrase').value = '';
    document.getElementById('bs').value = '';

});