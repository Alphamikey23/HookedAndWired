const users = [];
const newUsers = [
  {
    name: 'New User 1',
    email: 'newuser1@example.com',
    phone: '123-456-7890',
    website: 'newuser1.com',
    company: { name: 'New Company 1' },
    address: { city: 'New City 1', zipcode: '12345' },
  },
  {
    name: 'New User 2',
    email: 'newuser2@example.com',
    phone: '234-567-8901',
    website: 'newuser2.com',
    company: { name: 'New Company 2' },
    address: { city: 'New City 2', zipcode: '23456' },
  },
  {
    name: 'New User 3',
    email: 'newuser3@example.com',
    phone: '345-678-9012',
    website: 'newuser3.com',
    company: { name: 'New Company 3' },
    address: { city: 'New City 3', zipcode: '34567' },
  },
];

let newUserIndex = 0;

/* ---------------- Progression 1 ---------------- */
function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      users.push(...data);
      console.log(users.length);
      return users;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

/* ---------------- Progression 2 ---------------- */
function displayUsers() {
  const messageDiv = document.getElementById('message');
  if (!messageDiv) return;

  let output = '';

  users.forEach((user) => {
    output += `
Name : ${user.name}<br><br>
Email : ${user.email}<br><br>
Phone : ${user.phone}<br><br>
City : ${user.address?.city}<br><br>
Zipcode : ${user.address?.zipcode}<br><br>
Company : ${user.company?.name}<br><br>
`;
  });

  output += `<p>Total Users : ${users.length}</p>`;
  messageDiv.innerHTML = output;
}

/* ---------------- Progression 3 ---------------- */
function originalCreateUser(user) {
  return new Promise((resolve, reject) => {
    const exists = users.find((u) => u.email === user.email);

    if (exists) {
      reject(`Error: User with email ${user.email} already exists.`);
    } else {
      users.push(user);
      resolve('User added successfully!');
    }
  });
}

// createUser reference for test restore
let createUser = originalCreateUser;

/* ---------------- Progression 4 ---------------- */
async function init() {
  const messageDiv = document.getElementById('message');
  if (messageDiv) {
    messageDiv.innerHTML = 'Loading...';
  }

  try {
    await fetchUsers();
    displayUsers();
  } catch (error) {
    displayError(error);
  } finally {
    if (messageDiv) {
      messageDiv.innerHTML = messageDiv.innerHTML.replace('Loading...', '');
    }
  }
}

/* ---------------- Progression 5 ---------------- */
function getData() {
  if (users.length >= 10) {
    console.error('Error: Cannot add more than 10 users');
    return;
  }

  if (newUserIndex < newUsers.length) {
    createUser(newUsers[newUserIndex])
      .then(() => {
        newUserIndex++;
        displayUsers();
      })
      .catch((error) => displayError(error));
  }
}

/* ---------------- Error Handling ---------------- */
function displayError(error) {
  const existingError = document.getElementById('error');
  if (existingError) {
    existingError.remove();
  }

  const errorDiv = document.createElement('div');
  errorDiv.id = 'error';
  errorDiv.textContent = error;

  document.body.appendChild(errorDiv);
}

/* ---------------- Advanced: Edit User ---------------- */
function editUser(email, updatedData) {
  const user = users.find((u) => u.email === email);

  if (!user) {
    console.error(`Error: User not found with email ${email}`);
    return;
  }

  Object.assign(user, updatedData);
  displayUsers();
}