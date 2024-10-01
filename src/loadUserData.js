function loadUserData() {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
        userData = JSON.parse(savedUserData);
        fillTableWithUserData(userData);
    } else {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                userData = data;
                localStorage.setItem('userData', JSON.stringify(userData));
                fillTableWithUserData(userData);
            })
            .catch(error => console.error('Error loading JSON:', error));
    }
    console.log(userData)
}