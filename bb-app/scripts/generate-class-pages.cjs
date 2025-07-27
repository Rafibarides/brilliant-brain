const fs = require('fs');
const path = require('path');

// Read the classes data
const classesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/Classes.json'), 'utf8'));

// Read the built index.html as template
const indexHtmlPath = path.join(__dirname, '../dist/index.html');
const indexHtmlTemplate = fs.readFileSync(indexHtmlPath, 'utf8');

const generateClassHTML = (classItem) => {
  // Replace the meta tags in the built index.html
  return indexHtmlTemplate
    .replace(/<title>.*?<\/title>/, `<title>${classItem.title} - Brilliant Brain Classes | Brooklyn, NY</title>`)
    .replace(/(<meta name="title" content=").*?(")/g, `$1${classItem.title} - Brilliant Brain Classes | Brooklyn, NY$2`)
    .replace(/(<meta name="description" content=").*?(")/g, `$1${classItem.full_text} $${classItem.pricePerHour} per 1-hour session. All supplies included. Book your ${classItem.title.toLowerCase()} class in Brooklyn, NY.$2`)
    .replace(/(<meta name="keywords" content=").*?(")/g, `$1${classItem.title.toLowerCase()}, classes, education, Brooklyn, hands-on learning, creative education, brilliant brain classes$2`)
    .replace(/(<meta property="og:url" content=").*?(")/g, `$1https://brilliantbrainclasses.org/${classItem.endpoint}$2`)
    .replace(/(<meta property="og:title" content=").*?(")/g, `$1${classItem.title} - Brilliant Brain Classes$2`)
    .replace(/(<meta property="og:description" content=").*?(")/g, `$1${classItem.full_text} $${classItem.pricePerHour} per hour. All supplies included.$2`)
    .replace(/(<meta property="og:image" content=").*?(")/g, `$1${classItem.photo}$2`)
    .replace(/(<meta property="og:image:alt" content=").*?(")/g, `$1${classItem.title} class at Brilliant Brain Classes$2`)
    .replace(/(<meta property="twitter:url" content=").*?(")/g, `$1https://brilliantbrainclasses.org/${classItem.endpoint}$2`)
    .replace(/(<meta property="twitter:title" content=").*?(")/g, `$1${classItem.title} - Brilliant Brain Classes$2`)
    .replace(/(<meta property="twitter:description" content=").*?(")/g, `$1${classItem.full_text} $${classItem.pricePerHour} per hour. All supplies included.$2`)
    .replace(/(<meta property="twitter:image" content=").*?(")/g, `$1${classItem.photo}$2`)
    .replace(/(<meta property="twitter:image:alt" content=").*?(")/g, `$1${classItem.title} class at Brilliant Brain Classes$2`)
    .replace(/(<link rel="canonical" href=").*?(")/g, `$1https://brilliantbrainclasses.org/${classItem.endpoint}$2`);
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