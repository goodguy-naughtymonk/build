document.addEventListener("DOMContentLoaded", function() {
    // Create elements
    const title = document.createElement('title');
    title.textContent = 'Hello World';

    const h1 = document.createElement('h1');
    h1.textContent = 'Hello, World!';

    const p = document.createElement('p');
    p.textContent = 'You just got attacked :)';

    // Append elements to the document
    document.head.appendChild(title);
    document.body.appendChild(h1);
    document.body.appendChild(p);
});