const headerHTML = `
<header>
    <div class="logo-container">
        <a href="index.html"><img src="logo-light-final-no-font.svg" alt="Pixx.bot Logo" class="logo-img"></a>
    </div>
    <nav class="mono">
        <ul>
            <li><a href="index.html#solutions">Solutions</a></li>
            <li><a href="index.html#technology">Technology</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
`;

const footerHTML = `
<footer id="contact">
    <div class="footer-top">
        <div class="footer-brand">
            <div class="logo-container" style="width: 180px; margin-bottom: 20px;">
                <img src="logo-light-final-no-font.svg" alt="Pixx.bot Logo" class="logo-img">
            </div>
            <p class="mono">CANADA'S PREMIER EVENT TECHNOLOGY PROVIDER.</p>
        </div>
        <div class="footer-nav">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:hello@pixx.bot">Email Us</a>
        </div>
    </div>
    <div class="big-text">PIXX</div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById('header-inject')) {
        document.getElementById('header-inject').innerHTML = headerHTML;
    }
    if(document.getElementById('footer-inject')) {
        document.getElementById('footer-inject').innerHTML = footerHTML;
    }
});
