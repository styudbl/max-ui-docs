const fs = require("fs").promises;
const path = require("path");

// Пути
const SOURCE_PATH = "./source/max-ui/src/components";
const OUTPUT_FILE = "./docs/MAX_UI_REFERENCE.md";

// Рекурсивный поиск всех компонентов
async function findComponents(dir, components = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const componentPath = path.join(dir, entry.name);

      // Проверяем есть ли .tsx файл компонента
      const files = await fs.readdir(componentPath);
      const tsxFile = files.find(
        (f) => f.endsWith(".tsx") && !f.includes(".stories")
      );

      if (tsxFile) {
        components.push({
          name: entry.name,
          path: componentPath,
          files: files,
        });
      }

      // Рекурсивный поиск в подпапках (parts)
      await findComponents(componentPath, components);
    }
  }

  return components;
}

// Парсинг TypeScript файла
async function parseComponentTypes(componentPath) {
  const files = await fs.readdir(componentPath);
  const tsxFile = files.find(
    (f) => f.endsWith(".tsx") && !f.includes(".stories")
  );

  if (!tsxFile) return null;

  const content = await fs.readFile(path.join(componentPath, tsxFile), "utf-8");

  // Извлекаем интерфейс Props
  const propsMatch = content.match(/export interface (\w+Props) \{([^}]+)\}/s);
  const typesMatch = content.match(/export type (\w+) = ([^;]+);/g);

  return {
    props: propsMatch
      ? {
          name: propsMatch[1],
          content: propsMatch[2],
        }
      : null,
    types: typesMatch || [],
  };
}

// Парсинг Stories
async function parseStories(componentPath) {
  const files = await fs.readdir(componentPath);
  const storiesFile = files.find((f) => f.includes(".stories.tsx"));

  if (!storiesFile) return [];

  const content = await fs.readFile(
    path.join(componentPath, storiesFile),
    "utf-8"
  );
  const storyMatches = content.match(/export const (\w+):/g) || [];

  return storyMatches.map((s) =>
    s.replace("export const ", "").replace(":", "")
  );
}

// Генерация документации
async function generateComponentDocs(component) {
  const types = await parseComponentTypes(component.path);
  const stories = await parseStories(component.path);

  let docs = `## 📷 ${component.name}\n\n`;
  docs += `**Путь:** \`${component.path}\`\n\n`;

  if (types?.props) {
    docs += `### Props\n\n`;
    docs += `\`\`\`typescript\ninterface ${types.props.name} {\n${types.props.content}\n}\n\`\`\`\n\n`;
  }

  if (stories.length > 0) {
    docs += `### Примеры (Stories)\n\n`;
    stories.forEach((story) => {
      docs += `- ${story}\n`;
    });
    docs += `\n`;
  }

  docs += `---\n\n`;

  return docs;
}

// Основная функция
async function generateDocs() {
  console.log("🔍 Поиск компонентов...");
  const components = await findComponents(SOURCE_PATH);
  console.log(`✅ Найдено ${components.length} компонентов`);

  let markdown = `# 🎨 MAX UI: Полный справочник компонентов\n\n`;
  markdown += `**Сгенерировано:** ${new Date().toISOString()}\n\n`;

  // Оглавление
  markdown += `## 📑 Оглавление\n\n`;
  components.forEach((comp) => {
    const anchor = comp.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
    markdown += `- [${comp.name}](#${anchor})\n`;
  });
  markdown += `\n---\n\n`;

  // Документация
  console.log("📝 Генерация документации...");
  for (const component of components) {
    console.log(`  - ${component.name}`);
    const docs = await generateComponentDocs(component);
    markdown += docs;
  }

  // Сохранение
  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, markdown, "utf-8");

  console.log(`✅ Документация сохранена в ${OUTPUT_FILE}`);
}

// Запуск
generateDocs().catch(console.error);
