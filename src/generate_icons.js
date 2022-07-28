const path = require('path');
const fs = require('fs');
const camelCase = require("lodash/camelCase");
const upperFirst = require("lodash/upperFirst");

const directory = path.resolve(__dirname + "./../node_modules/bootstrap-icons/icons");
const iconWritePath = path.resolve(__dirname + "/components/");

let iconExports = [];
const baseIcon = fs.readFileSync(path.resolve(__dirname + "/shared/BaseIcon.vue")).toString();


function isNumber(val) {
    return !isNaN(val);
}
function startsWithNumber(str) {
    return /^\d/.test(str);
}

function generateAndWriteIcon(icon) {
    const iconName = upperFirst(camelCase(icon.replace(".svg", "")));
    const iconContent = fs.readFileSync(path.resolve(directory + "/" + icon)).toString();

    let theIcon = baseIcon
        .replace("<!--CONTENT-->", iconContent)
        .replace("BASE_ICON_NAME", iconName)
        .replace('fill="currentColor"', ':fill="fill"')
        .replace("ORIGINAL_ICON_CLASS", (icon.replace(".svg", "")))
        .replace('class="bi bi-' + (icon.replace(".svg", "")) + '"', ':class="classes"')
        .replace('width="16"', ':width="sizeWidth"')
        .replace('height="16"', ':height="sizeHeight"');

    iconExports.push('export {default as ' + (startsWithNumber(iconName) ? "_" : "") + iconName + '} from "./components/' + iconName + '.vue";');

    try {
        fs.writeFileSync([iconWritePath, iconName].join("/") + ".vue", theIcon);
    } catch (err) {
        console.error(err)
    }
}

function generateSvg() {
    fs.readdirSync(directory)
        .filter(i => i.endsWith(".svg"))
        .forEach(icon => generateAndWriteIcon(icon));

    console.info(iconExports.length + " icons generated successfully.");

    fs.writeFileSync(
        path.resolve(__dirname + '/index.ts'),
        iconExports.join("\n")
    );

    console.info(iconExports.length + " icons exported in src/index.ts");
}

generateSvg();