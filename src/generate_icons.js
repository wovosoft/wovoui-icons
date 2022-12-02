import {resolve,dirname} from "path"
import {readFileSync, writeFileSync, readdirSync, copyFile, appendFileSync} from "fs";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const upperFirst = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
}

const camelCase = str => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');

const directory = resolve(__dirname + "./../node_modules/bootstrap-icons/icons");
const iconWritePath = resolve(__dirname + "/components/");

let iconExports = [];
const baseIcon = readFileSync(resolve(__dirname + "/shared/BaseIcon.vue")).toString();

function startsWithNumber(str) {
    return /^\d/.test(str);
}

function generateAndWriteIcon(icon) {
    const iconName = upperFirst(camelCase(icon.replace(".svg", "")));
    const iconContent = readFileSync(resolve(directory + "/" + icon)).toString();

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
        writeFileSync([iconWritePath, iconName].join("/") + ".vue", theIcon);
    } catch (err) {
        console.error(err)
    }
}

function generateSvg() {
    readdirSync(directory)
        .filter(i => i.endsWith(".svg"))
        .forEach(icon => generateAndWriteIcon(icon));

    console.info(iconExports.length + " icons generated successfully.");

    writeFileSync(
        resolve(__dirname + '/index.ts'),
        iconExports.join("\n")
    );

    console.info(iconExports.length + " icons exported in src/index.ts");
}

function generateByNames() {
    let names = readdirSync(directory)
        .filter(i => i.endsWith(".svg"))
        .map(i => "'" + i.replace(".svg", "") + "'");

    writeFileSync(
        resolve(__dirname + "/assets/names_list.js"),
        "export default " + JSON.stringify(names.map(i => i.slice(1, i.length - 1)))
    );
    writeFileSync(resolve(__dirname + "/types/names.d.ts"), "export type Icons \n\t= " + names.join("\n\t| "));

    console.log(names.length + " icons names generated");

    copyFile(
        resolve(__dirname + "/shared/Bi.vue"),
        resolve(__dirname + "/components/Bi.vue"),
        (err) => {
            if (err) throw err;
            console.log('Bi.vue component copied to /components');
        }
    );

    try {
        appendFileSync(
            resolve(__dirname + "/index.ts"),
            '\n//Bootstrap Common Icon Component\nexport {default as Bi} from "./components/Bi.vue";'
        );
    } catch (err) {
        console.error(err)
    }
}

generateSvg();
generateByNames();