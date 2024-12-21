const searchInput = document.getElementById('search-input');
const result = document.getElementById('result');

async function doSearch() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  console.log(users);

  const searchValue = searchInput.value;
  // let searchResult = data?.filter((item) => item.name === searchInput);

  if (searchValue) {
    let searchResult = users?.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Extract names from searchResult array
    const names = searchResult?.map((item) => item.name);

    // Display the names as a comma-separated string
    result.innerText =
      names.length > 0 ? names.join(', ') : 'No matching users found';
    console.log(names);
  } else {
    result.innerText = 'No matching users found';
  }
}

searchInput.addEventListener('input', doSearch);
