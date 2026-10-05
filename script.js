// ── Universal header injection ───────────────────────────────────────────────
// script.js sits at the bottom of <body>, so the DOM is fully parsed when this
// runs. Replace the placeholder <div id="site-header"> with the real header.
(function () {
  var placeholder = document.getElementById('site-header');
  if (!placeholder) return;
  placeholder.outerHTML = [
    '<header class="nav">',
    '  <div class="container nav-inner">',
    '    <a class="brand-logo" href="index.html" aria-label="Kainocore Technologies">',
    '      <img src="kainocore-logo.png" alt="Kainocore Technologies">',
    '    </a>',
    '    <button class="mobile-toggle" aria-label="Open menu">&#9776;</button>',
    '    <nav class="menu">',
    '      <a href="index.html">Home</a>',
    '      <a href="solutions.html">Solutions</a>',
    '      <a href="industries.html">Industries</a>',
    '      <a href="configurator.html">Configurator</a>',
    '      <a href="about.html">About</a>',
    '      <a class="pill" href="contact.html">Get in touch</a>',
    '    </nav>',
    '  </div>',
    '</header>'
  ].join('\n');
})();

// ── Universal footer injection ───────────────────────────────────────────────
(function () {
  var fp = document.getElementById('site-footer');
  if (!fp) return;
  fp.outerHTML = [
    '<footer class="footer">',
    '  <div class="container">',
    '    <div class="footer-main">',
    '      <div class="footer-brand">',
    '        <span class="footer-name">Kainocore Technologies</span>',
    '        <span class="footer-tagline">Physical Infrastructure for the AI Era.</span>',
    '        <div class="footer-statement">',
    '          <span class="footer-statement-primary">Power. Cooling. Interconnect.</span>',
    '          <span class="footer-statement-secondary">Infrastructure built for high-density AI.</span>',
    '        </div>',
    '      </div>',
    '      <div class="footer-cols">',
    '        <div class="footer-col">',
    '          <span class="footer-col-heading">Explore</span>',
    '          <a href="solutions.html">Solutions</a>',
    '          <a href="industries.html">Industries</a>',
    '          <a href="about.html">About</a>',
    '          <a href="configurator.html">Configurator</a>',
    '        </div>',
    '        <div class="footer-col">',
    '          <span class="footer-col-heading">Connect</span>',
    '          <a href="contact.html">Contact</a>',
    '          <a href="#">Technology Partners</a>',
    '          <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>',
    '        </div>',
    '      </div>',
    '    </div>',
    '    <div class="footer-rail">',
    '      <span class="footer-holding">An Arkenstone Holding company.</span>',
    '      <div class="footer-rail-right">',
    '        <span>\u00a9 2026 Kainocore Technologies</span>',
    '        <a href="#">Privacy</a>',
    '        <a href="#">Terms</a>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');
})();

// ── Page interactions ────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle (works on every page after header injection above)
  var toggle = document.querySelector(".mobile-toggle");
  var menu   = document.querySelector(".menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  // Contact-form mailto handler (contact.html only)
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d       = new FormData(form);
      var subject = encodeURIComponent("Kainocore enquiry: " + (d.get("topic") || "General"));
      var body    = encodeURIComponent(
        "Name: "    + (d.get("name")    || "") + "\n" +
        "Company: " + (d.get("company") || "") + "\n" +
        "Email: "   + (d.get("email")   || "") + "\n" +
        "Topic: "   + (d.get("topic")   || "") + "\n\n" +
                      (d.get("message") || "")
      );
      window.location.href = "mailto:hello@kainocore.com?subject=" + subject + "&body=" + body;
    });
  }
});
