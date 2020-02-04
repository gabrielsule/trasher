## Trash
Se trata de una librería de **NodeJS** para eliminar (mover a la papelera) los archivos o extensiones deseadas

### Instalación
```bash
npm install trash
```

### Codificación
```javascript
const trash = require('trash');

Limpiar();

async function Limpiar() {
    await trash(['*.md', '!readme.md']);
    console.log('documentos movidos a la papelera');
}
```

### Ejecución
```bash
node index.js
```