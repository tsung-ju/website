const { createFontStack } = require("@capsizecss/core");
const { fromFile } = require("@capsizecss/unpack");

async function main() {
  const stack = [
    await fromFile(require.resolve("@fontsource/playpen-sans/files/playpen-sans-latin-400-normal.woff2")),
    // The following require modifying the capsizecss/unpack package to support ttc files
    // See https://github.com/seek-oss/capsize/pull/156
    await fromFile("/System/Library/Fonts/Supplemental/ChalkboardSE.ttc", "ChalkboardSE-Light"),
    await fromFile("/System/Library/Fonts/Supplemental/Comic Sans MS.ttf"),
  ];
  const { fontFamily, fontFaces } = createFontStack(stack);
  console.log(fontFamily);
  console.log(fontFaces);
}

main()
