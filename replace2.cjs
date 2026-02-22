const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'client', 'src');
const filesToUpdate = [];

function findFiles(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            findFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            filesToUpdate.push(fullPath);
        }
    });
}
findFiles(dirPath);

// Extract all unique manuscdn references
let uniqueLinks = new Set();
for (let file of filesToUpdate) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/https:\/\/files\.manuscdn\.com\/[^"]+\.jpeg/g);
    if (matches) {
        matches.forEach(m => uniqueLinks.add(m));
    }
}

// Create mapping
const linksArray = Array.from(uniqueLinks);
const linkMap = {};
linksArray.forEach((link, idx) => {
    linkMap[link] = `/a${idx + 1}.jpeg`; // map up to 13
});

// Update files
for (let file of filesToUpdate) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    for (const [oldLink, newLink] of Object.entries(linkMap)) {
        if (content.includes(oldLink)) {
            // using global replace just in case
            content = content.split(oldLink).join(newLink);
            modified = true;
        }
    }
    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
