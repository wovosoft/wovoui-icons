import { existsSync, mkdirSync, readdirSync, copyFileSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const directory = resolve(__dirname, "components");
const directoryTypes = resolve(__dirname, "types");

function generateTypes() {
    const names = readdirSync(directory);
    const distComponentsDir = resolve(__dirname, "../dist/components");
    const distTypesDir = resolve(__dirname, "../dist/types");

    if (!existsSync(distComponentsDir)) {
        mkdirSync(distComponentsDir, { recursive: true });
    }

    for (const x of names) {
        if (!x.endsWith(".ts")) continue;
        const componentName = x.slice(0, -3); // remove ".ts"
        copyFileSync(
            resolve(__dirname, "shared/TestComponent.d.ts"),
            resolve(distComponentsDir, `${componentName}.d.ts`),
        );
    }

    console.log("Component definitions generated");

    const types = readdirSync(directoryTypes);

    if (!existsSync(distTypesDir)) {
        mkdirSync(distTypesDir, { recursive: true });
    }

    for (const x of types) {
        copyFileSync(
            resolve(directoryTypes, x),
            resolve(distTypesDir, x),
        );
    }

    console.log("Basic Type definitions generated");

    // Copy src/index.ts to dist/index.d.ts, stripping out the .ts extension from component imports
    const indexContent = readFileSync(resolve(__dirname, "index.ts"), "utf8");
    const processedIndexContent = indexContent.replace(/\.ts";/g, '";');
    
    writeFileSync(
        resolve(__dirname, "../dist/index.d.ts"),
        processedIndexContent,
        "utf8"
    );
    console.log("Root Type definitions generated");
}

generateTypes();
