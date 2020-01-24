const iw = require("inline-webassembly");

const wasm = `;;wasm
(module
    (func (export "add") (param $n1 i32) (param $n2 i32) (result i32)
      get_local $n1
      get_local $n2
      i32.add
      )
)
`;

iw(wasm).then(wasmModule => {
	let arg = process.argv.slice(2);
	const sum = arg.reduce((a, b) => wasmModule.add(Number(a), Number(b)), 0);
	console.log(`Sum = ${sum}`);
});
