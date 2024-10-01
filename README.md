# file_reader_writer
Librairie facilitant l'utilisation de fichier texte en JavaScript

## Importation
Pour importer la librairie située dans le dossier `dist` :
```html
<script src="filereader.js"></script>
```
## Utilisation
### Lecture de fichiers

```javascript
var reader = new TextFileReader();
```
À partir d'un ```<input type="file">```, il est possible de lire le texte contenu dans le fichier importé :
```html
<input type="file" id="fichier">
```
```javascript
var reader = new TextFileReader();
var input = document.getElementById("fichier");
input.onchange = async function() {
  console.log(await (reader.readTextFromInput(input)));
}
```
### Ecriture dans des fichiers

```javascript
var writer = new TextFileWriter();
```
Pour enregistrer le fichier nommé `test.txt` avec comme contenu `hello world` :
```javascript
var writer = new TextFileWriter();
const texte = "hello world";
const nomFichier = "test.txt";
writer.saveAsText(texte, nomFichier);
```

### Node.js
La librairie (non disponible par npm) est également cabable de créer et de lire des fichiers grâce au module `fs`. Pour lire un fichier et le réecrire autre part on peux faire : 
```javascript
(async () => {
  const file = require("./filereader");
  const f = new file.TextFileReader();
  const w = new file.TextFileWriter();
  await w.saveAsText(f.readFile("index.js"), "test.txt");
})();
```
