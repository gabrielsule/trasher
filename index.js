const trash = require('trash');

Limpiar();

async function Limpiar() {
    await trash(['*.md', '!readme.md']);
    console.log('documentos movidos a la papelera');
}