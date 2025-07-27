const fs = require('fs');
const path = require('path');

// Read the classes data
const classesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/Classes.json'), 'utf8'));

// Base HTML template
const generateClassHTML = (classItem) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>${classItem.title} - Brilliant Brain Classes | Brooklyn, NY</title>
    <meta name="title" content="${classItem.title} - Brilliant Brain Classes | Brooklyn, NY" />
    <meta name="description" content="${classItem.full_text} $${classItem.pricePerHour} per 1-hour session. All supplies included. Book your ${classItem.title.toLowerCase()} class in Brooklyn, NY." />
    <meta name="keywords" content="${classItem.title.toLowerCase()}, classes, education, Brooklyn, hands-on learning, creative education, brilliant brain classes" />
    <meta name="author" content="Brilliant Brain Classes" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://brilliantbrainclasses.org/${classItem.endpoint}" />
    <meta property="og:title" content="${classItem.title} - Brilliant Brain Classes" />
    <meta property="og:description" content="${classItem.full_text} $${classItem.pricePerHour} per hour. All supplies included." />
    <meta property="og:image" content="${classItem.photo}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${classItem.title} class at Brilliant Brain Classes" />
    <meta property="og:site_name" content="Brilliant Brain Classes" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://brilliantbrainclasses.org/${classItem.endpoint}" />
    <meta property="twitter:title" content="${classItem.title} - Brilliant Brain Classes" />
    <meta property="twitter:description" content="${classItem.full_text} $${classItem.pricePerHour} per hour. All supplies included." />
    <meta property="twitter:image" content="${classItem.photo}" />
    <meta property="twitter:image:alt" content="${classItem.title} class at Brilliant Brain Classes" />

    <!-- WhatsApp / Telegram -->
    <meta property="og:image:type" content="image/jpeg" />
    
    <!-- Additional Meta Tags -->
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0072B0" />
    <meta name="msapplication-TileColor" content="#0072B0" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://brilliantbrainclasses.org/${classItem.endpoint}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script checks to see if a redirect is present in the query string,
      // converts it back into the correct url and adds it to the
      // browser's history using window.history.replaceState(...),
      // which won't cause the browser to attempt to load the new url.
      // When the single page app is loaded further down in this file,
      // the correct url will be waiting in the browser's history for
      // the single page app to route accordingly.
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;
};

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Generate HTML files for each class
classesData.classes.forEach(classItem => {
  const html = generateClassHTML(classItem);
  const filePath = path.join(distDir, `${classItem.endpoint}.html`);
  
  fs.writeFileSync(filePath, html);
  console.log(`Generated: ${classItem.endpoint}.html`);
});

console.log(`Successfully generated ${classesData.classes.length} class pages!`); 