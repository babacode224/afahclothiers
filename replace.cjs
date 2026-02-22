const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "client", "src");

function findAndReplace(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      findAndReplace(fullPath);
    } else if (fullPath.endsWith(".tsx") || fullPath.endsWith(".ts")) {
      let content = fs.readFileSync(fullPath, "utf8");
      if (content.includes("https://cdn.manus.im/uploads/2024/afah/")) {
        content = content.replace(
          /https:\/\/cdn\.manus\.im\/uploads\/2024\/afah\//g,
          "/"
        );
        fs.writeFileSync(fullPath, content, "utf8");
        console.log(`Updated ${fullPath}`);
      }
    }
  });
}

findAndReplace(directoryPath);
