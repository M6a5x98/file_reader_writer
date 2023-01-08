class TextFileReader {
	constructor() {

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
		let a = document.createElement("a");
		let blob = new Blob([text], {
			type: "text/plain"
		});
		a.href = await URL.createObjectURL(blob);
		a.download = fileName;
		a.click();
	}
}