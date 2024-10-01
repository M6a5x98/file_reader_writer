class TextFileReader {
  constructor() {}
  /**
   *
   * @param {string} file_path The path of the file to read (Node.js only)
   * @returns The content of the file
   */
  readFile(file_path) {
    if (typeof process !== "object")
      throw new Error("Cannot read file in browser");
    else {
      const fs = require("fs");
      return fs.readFileSync(file_path, "utf-8");
    }
  }
  /**
   *
   * @param {HTMLInputElement} input The file input
   * @returns The readed text
   */
  async readTextFromInput(input) {
    const file = input.files[0];
    const txt = await file.text();
    let texte = txt;
    return texte;
  }
}

class TextFileWriter {
  constructor() {}
  /**
   *
   * @param {string} text The text to write to the file
   * @param {string} fileName The name of the file
   */
  async saveAsText(text, fileName) {
    if (typeof window !== "undefined") {
      let a = document.createElement("a");
      let blob = new Blob([text], {
        type: "text/plain",
      });
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      a.click();
    } else {
      const fs = require("fs");
      fs.writeFileSync(fileName, text);
    }
  }
}

if (typeof window === "undefined") {
  module.exports = { TextFileReader, TextFileWriter };
}
