import { PhpWeb as PHP } from 'php-wasm/PhpWeb';
const phpWeb = new PHP;
phpWeb.addEventListener('ready', () => {
    phpWeb.run(`
    <?php 
        phpinfo();
    
    `);
});
phpWeb.addEventListener('output', (event) => {
    document.write(event.detail);
});