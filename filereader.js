class TextFileReader {
	constructor() {

	}
	readFile(file_path) {
		if (typeof process !== "object") throw new Error('Cannot read file in browser');
		else {
			const fs = require('fs');
			return fs.readFileSync(file_path, 'utf-8');
		}
	}
	async readTextFromInput(input) {
		const file=input.files[0];
		const txt = await file.text();
		var texte = await txt;
		return texte;
	}
}

class TextFileWriter {
	constructor() {

	}
	async saveAsText(text, fileName) {
		if (window) {
			let a = document.createElement("a");
			let blob = new Blob([text], {
				type: "text/plain"
			});
			a.href = await URL.createObjectURL(blob);
			a.download = fileName;
			a.click();
		} else {
			const fs = require('fs');
			fs.writeFileSync(fileName,text)
		}
	}
}

if (typeof window === "undefined) {
	module.exports = {TextFileReader,TextFileWriter}
}
