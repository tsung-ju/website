import * as fs from "fs";
import * as path from "path";
import { finished } from "stream/promises";
import { WritableStream as ParserStream } from "htmlparser2/WritableStream";

async function getModules() {
  const modules = [];
  let currentModule = null;
  const parserStream = new ParserStream({
    onopentag(name, attributes) {
      if (name === "a" && attributes.class === "Module") {
        currentModule = {
          href: attributes.href,
          name: ""
        };
      }
    },
    ontext(text) {
      if (currentModule !== null) {
        currentModule.name += text;
      }
    },
    onclosetag(name) {
      if (name === "a" && currentModule !== null) {
        modules.push(currentModule);
        currentModule = null;
      }
    }
  });
  const stream = fs.createReadStream(path.join(import.meta.dirname, "Everything.html"));
  stream.pipe(parserStream);
  await finished(stream);
  return modules;
}

function toTrie(modules) {
  const trie = new Map();
  for (const module of modules) {
    let current = trie;
    for (const part of module.name.split(".")) {
      if (!current.has(part)) {
        current.set(part, new Map());
      }
      current = current.get(part);
    }
    current.href = module.href;
    current.name = module.name;
  }
  return trie;
}


export default async function () {
  return {
    layout: "agda",
    templateEngineOverride: false,
    permalink: (data) => `${data.page.filePathStem}.html`,
    agdaModules: toTrie(await getModules())
  }
}
