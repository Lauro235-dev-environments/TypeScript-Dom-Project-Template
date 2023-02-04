# Readme

Let me quickly introduce you to the project. There's nothing particularly advanced in this repo, so this is mainly aimed for those less confident in setting up their TS environment.

This is a quick and easy template for you to use in order to explore TypeScript in your own environment. I'm using it to explore Object Oriented Programming, but you can, of course use it however you like.

## Binaries

At the time of publishing I released this with the latest stable Node version (18.13.0) alongside NPM 9.4.0

## Dependencies

The only Dev dependencies are as follows

1. typescript
2. @types/node
3. vitest

## Compiling Code

Currently everything in the ./src folder will be copied over to the ./dist folder on each command call 'tsc'.

Note: You can install tsc globally on your machine with `npm i -g typescript` which will allow you consistent capabilities of using the TypeScript compiler, but you can always call 'npx tsc' to. You can also use the build command if that is something you are more likely to remember.

The only commands you need to type then are either:

1. `tsc`
2. `npx tsc`
3. `npm run build`

## Scripts

Nice low weight set of scripts that focus on ease of use. Perfect for hacking away.

1. `npm start` => runs index.js file in the dist/src folder
2. `npm run build` => generates the dist folder content from your root/src folder
3. `npm test` => runs vitest which runs any files ending in spec.ts or test.ts

## Important files

1. tsconfig.json
2. vitest.config.ts

I'm no expert here on these files, but it's well worth becoming familliar with the thought and architecture that has gone into the TypeScript ecosystem. It's also worth checking out Vitest, which is a blazingly fast test runner/assertion library based on Jest which I highly recommend becoming familiar with.

I know I'm grateful to dig deeper.

Best of luck to you in your learnings!

### Useful Resources

[Introduction to TypeScript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

[How to us Classes in TypeScript](https://www.digitalocean.com/community/tutorials/how-to-use-classes-in-typescript)

[Vitest config options](https://vitest.dev/config/)

[Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
