const program = require('commander');

export const runHelp = () => {
  program
    .version('1.0.0', '-V, --version', 'output the version number')
    .arguments('<firstConfig> <secondConfig>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format');

  program.parse(process.argv);
};

export default runHelp;
