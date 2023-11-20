function requestUserInfo(username) {
    return fetch(`https://api.github.com/users/${username}`);
  }
  
  const gitHubForm = document.getElementById("git-hub");
  
  gitHubForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let usernameInput = document.getElementById("userName-input");
    let gitHubUsername = usernameInput.value.trim();
  
    requestUserInfo(gitHubUsername)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((user) => {
        let ul = document.getElementById("userRepos");
        ul.innerHTML = ''; // Clear previous results
    
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
            <div class="user-card">
                <img src="${user.avatar_url}" alt="Avatar of ${user.name || gitHubUsername}" class="user-avatar">
                <p><a href="${user.html_url}" target="_blank"><strong></strong> ${user.name || gitHubUsername}</a></p>
                <p><strong>Public Repos:</strong> ${user.public_repos}</p>
            </div>
        `;
        ul.appendChild(li);
    })
      .catch(error => {
        let ul = document.getElementById("userRepos");
        ul.innerHTML = `<li class="list-group-item"><p><strong>No account exists with username:</strong> ${gitHubUsername}</p></li>`;
      });
  });
  