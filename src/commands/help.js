var program = require('commander');



  Usage: gendiff [options] <firstConfig> <secondConfig>

  Compares two configuration files and shows a difference.

program
  .version('1.0.0')
  .option('-h, --help', 'output usage information')
  .option('-V, --version', 'Add pineapple')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
