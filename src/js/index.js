const form = document.getElementById('create-post-form');
const postsContainer = document.getElementById('posts');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    const title = titleInput.value;
    const content = contentInput.value;

    // Create a new blog post element
    const postElement = document.createElement('article');
    postElement.classList.add('post');
    postElement.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
  `;

    // Append the post element to the posts container
    postsContainer.appendChild(postElement);

    // Clear the form inputs
    titleInput.value = '';
    contentInput.value = '';
}
