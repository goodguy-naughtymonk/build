document.addEventListener("DOMContentLoaded", function() {
    // Create elements
    const title = document.createElement('title');
    title.textContent = 'TEST HOST HEADER INJECTION';

    const h1 = document.createElement('h1');
    h1.textContent = 'Hello visitor!';

    const p = document.createElement('p');
    p.textContent = 'You just got redirected :)\nHope you did not input anything sensitive ;)';

    const img = document.createElement('img');
    img.src = 'https://media.tenor.com/EFDwfjT2GuQAAAAM/spinning-cat.gif';
    img.alt = 'Spinning Cat';

    // Append elements to the document
    document.head.appendChild(title);
    document.body.appendChild(h1);
    document.body.appendChild(p);
    document.body.appendChild(img);
});
