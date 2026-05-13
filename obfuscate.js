const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

const inputFile = './Data/system/handle/handleRefresh.js';
const outputFile = './Data/system/handle/handleRefresh.obfuscated.js';

const code = fs.readFileSync(inputFile, 'utf8');

const obfuscated = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    numbersToExpressions: true,
    renameGlobals: false,
    selfDefending: true,
    shuffleStringArray: true,
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 5,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayCallsTransformThreshold: 0.75,
    stringArrayEncoding: ['base64'],
    stringArrayIndexesType: ['hexadecimal-number'],
    stringArrayThreshold: 0.75,
    transformObjectKeys: true,
    unicodeEscapeSequence: true
});

fs.writeFileSync(outputFile, obfuscated.getObfuscatedCode());
console.log('Obfuscated file saved to:', outputFile);