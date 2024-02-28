# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


<!-- 
Construa o service com os métodos de GetAll, Post e Put, Delete  indicando o caminho da sua aplicação backend em deploy.

 Construa as páginas de GetAll e Post/Put,Delete do recurso Categoria com seus devidos componentes e lógica.

 Teste sua aplicação e valide cada método do CRUD de Categoria. (você estará sendo avaliado sobre os conceitos de hooks, axios).
 Crie uma branch chamada CRUD-categoria e suba a alteração do projeto até aqui, 

 Teste sua aplicação e valide as rotas do react router do seu projeto. (você estará sendo avaliado sobre os conceitos de rotas em ReactRouter).
 
 Crie uma branch chamada rotas-conclusao-do-projeto e suba a alteração do projeto até aqui. -->
