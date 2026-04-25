# Ayushi Arya Sketch Artist

Warm handmade Angular portfolio for sketch artist Ayushi Arya. The site includes a landing page,
portfolio gallery, local upload/request flow, queue token generation, and Instagram Reel
placeholder cards ready for future real embeds.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## GitHub Pages build

For GitHub Pages, build with the repository base href:

```bash
npm run build:gh-pages
```

The production files are generated under `dist/`. Publish the browser output folder for the
`sketch_Portfolio` repository:

```text
dist/Ayushi_Arya-Sketches/browser
```

## CI/CD

GitHub Actions deploys this Angular app through `.github/workflows/deploy-github-pages.yml`.
On every push to `Dev`, `main`, or `master`, the workflow:

1. Installs dependencies with `npm ci`.
2. Runs `npm test -- --watch=false`.
3. Builds with `npm run build:gh-pages`.
4. Copies `index.html` to `404.html` so Angular routes work on refresh.
5. Publishes the browser output with GitHub Pages actions.

In GitHub, set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.
After the workflow succeeds, the site will be available at:

```text
https://softprotechcoader.github.io/sketch_Portfolio/
```

If the workflow fails with `Get Pages site failed` or `Not Found`, enable GitHub Pages once:

1. Open the repository on GitHub.
2. Go to **Settings > Pages**.
3. Set **Build and deployment > Source** to **GitHub Actions**.
4. Rerun the failed workflow.

Alternative auto-enable option:

1. Create a GitHub fine-grained token with repository **Pages: Read and write** and **Administration: Read and write**, or a classic token with `repo` scope.
2. Add it as repository secret `PAGES_TOKEN`.
3. Rerun the workflow. The `actions/configure-pages@v6` step will attempt to enable Pages automatically.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
