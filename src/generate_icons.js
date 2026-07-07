import { resolve, dirname } from "path"
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const upperFirst = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
}

const camelCase = str => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');

const directory = resolve(__dirname, "../node_modules/bootstrap-icons/icons");
const iconWritePath = resolve(__dirname, "components");

const iconExports = [];

function startsWithNumber(str) {
    return /^\d/.test(str);
}

function extractSvgInnerHTML(svgContent) {
    const match = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
    return match ? match[1].trim() : '';
}

function generateAndWriteIcon(icon) {
    const iconName = upperFirst(camelCase(icon.replace(".svg", "")));
    const iconContent = readFileSync(resolve(directory, icon), "utf8");
    const svgInnerHTML = extractSvgInnerHTML(iconContent);
    const iconClass = `bi-${icon.replace(".svg", "")}`;
    const componentCode = `import { createIcon } from '../createIcon'\n\nexport default /*@__PURE__*/createIcon(${JSON.stringify(svgInnerHTML)}, '${iconClass}')\n`;

    iconExports.push(`export { default as ${startsWithNumber(iconName) ? "_" : ""}${iconName} } from "./components/${iconName}.ts";`);

    writeFileSync(resolve(iconWritePath, `${iconName}.ts`), componentCode);
}

function generateSvg() {
    readdirSync(directory)
        .filter(i => i.endsWith(".svg"))
        .forEach(icon => generateAndWriteIcon(icon));

    console.info(iconExports.length + " icons generated successfully.");

    writeFileSync(
        resolve(__dirname, 'index.ts'),
        ["import './style.css'", ...iconExports, ""].join("\n")
    );

    console.info(iconExports.length + " icons exported in src/index.ts");
}

function generateByNames() {
    let names = readdirSync(directory)
        .filter(i => i.endsWith(".svg"))
        .map(i => "'" + i.replace(".svg", "") + "'");

    writeFileSync(
        resolve(__dirname, "assets/names_list.js"),
        "export default " + JSON.stringify(names.map(i => i.slice(1, i.length - 1)))
    );
    writeFileSync(resolve(__dirname, "types/names.d.ts"), "export type Icons \n\t= " + names.join("\n\t| "));

    console.log(names.length + " icons names generated");

    const biComponentCode = `import { defineComponent, h } from 'vue'\nimport type { ColorVariants } from '../types'\n\nexport default /*@__PURE__*/defineComponent({\n  name: 'Bi',\n  props: {\n    icon: { type: String, default: null },\n    variant: { type: String as () => ColorVariants | null, default: null },\n    bgVariant: { type: String as () => ColorVariants | null, default: null },\n    spin: { type: Boolean, default: false },\n  },\n  setup(props) {\n    return () => h('i', {\n      class: [\n        'bi',\n        props.icon ? \`bi-\${props.icon}\` : null,\n        {\n          [\`text-\${props.variant}\`]: props.variant,\n          [\`bg-\${props.bgVariant}\`]: props.bgVariant,\n          'spin-icon': props.spin,\n        },\n      ],\n    })\n  },\n})\n`;

    writeFileSync(resolve(__dirname, "components/Bi.ts"), biComponentCode);
    console.log('Bi.ts component generated in /components');

    const indexContent = readFileSync(resolve(__dirname, 'index.ts'), 'utf8');
    if (!indexContent.includes('export { default as Bi }')) {
        writeFileSync(
            resolve(__dirname, 'index.ts'),
            indexContent + '\nexport { default as Bi } from "./components/Bi.ts";\n'
        );
    }
}

generateSvg();
generateByNames();