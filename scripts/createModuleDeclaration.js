#! /usr/bin/env node
/* tslint:disable:no-console */

// Simple script tp create a Typescript declaration file for a javascript module that doesn't already provide one.

const fs = require('fs')
const path = require('path')

const packageName = require(path.resolve('./package.json')).name

const distFolder = path.resolve(process.cwd(), 'dist')

if (!fs.existsSync(distFolder)){
    fs.mkdirSync(distFolder);
}

const declarationPath = path.resolve(distFolder, 'index.d.ts')

if (!fs.existsSync(declarationPath)) {
  fs.writeFileSync(declarationPath, `declare module '${packageName}';\n`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
