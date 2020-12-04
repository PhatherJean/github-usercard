import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
/*
STEP 3: Create a function that accepts a single object as its only argument.
Using DOM methods and properties, create and return the following markup:

<div class="card">
<img src={image url of user} />
      <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
        <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
        </div>
    </div>
    */
   const cards = document.querySelector('.cards');
   
   function markup(obj) {
     const card = document.createElement('div');
     const pict = document.createElement('img');
     const info = document.createElement('div');
     const name = document.createElement('h3');
     const username = document.createElement('p');
  const local = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const follow = document.createElement('p');
  const fan = document.createElement('p');
  const bio = document.createElement('p');

  // Append 
  
  card.append(pict);
  card.append(info);
  info.append(name);
  info.append(username);
  info.append(local);
  info.append(profile);
  profile.append(link);
  info.append(follow);
  info.append(fan);
  info.append(bio);
  
  //ClassList 

  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  
  //text
  
  pict.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  local.textContent = `Location: ${obj.location}`;
  link.href = obj.url;
  link.textContent = 'Profile: ' + `${obj.url}`;
  follow.textContent = `Following: ${obj.followers}`;
  fan.textContent = `Followers: ${obj.following}`;
  bio.textContent = obj.bio;

  
  
  //dont forget to return
  return card
  
}//end of function

axios 
.get('https://api.github.com/users/PhatherJean')
.then((response) => {
    const form = response.data
    cards.append(markup(form));
  })
  .catch((error) => {
    console.log(error);
  });
  
  followersArray.forEach((name) => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((resp) => {
        const inform = resp.data;
        cards.append(markup(inform));
      })
      .catch((err) => {
        console.log('You messed up somewhere jit!!!')
      });
  })
  
  /*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
