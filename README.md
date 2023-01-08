# file_reader_writer
Librairie facilitant l'utilisation de fichier texte en JavaScript

# Utilisation
## Lecture de fichiers

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
