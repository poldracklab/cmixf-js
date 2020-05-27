import cmixf from './cmixf.js'

function cli_parse(input) {
  try {
    cmixf.parse(input);
    console.log('Success: ' + input)
  } catch (e) {
    console.log(e.hash.errStr);
  }
}

export function cli(args) {
  console.log(args);
  console.log("------");
  args['_'].map(x => cli_parse(x));
}
