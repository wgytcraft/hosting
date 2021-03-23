# Pruebas de 1hostjs

## Cómo probar un módulo

- editar modules / modules.json para probar diferentes módulos
- ejecute test.js y vaya a http: // localhost: 3000
- busca las cosas correctas

## probar un lanzamiento

- obtener la liberación
- hacer módulos / módulos.json

```json
{
  "version": "1.1.0-beta",
  "moduleList": ["gh://1hostjs/errors", "gh://1hostjs/hello-world-template"],
  "errorHandler": {
    "module": "1hostjs/errors",
    "config": {}
  },
  "website": ["test.wgyt.tk"],
  "websiteData": {
    "test.wgyt.tk": {
      "module": "1hostjs/hello-world-template",
      "config": {}
    }
  }
}
```

reemplazando test.wgyt.tk con el dominio en el que estás probando

- ejecute test.js y vaya a http: // localhost: 3000
- busca las cosas correctas
- publicar
