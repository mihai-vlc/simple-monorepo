import { wordWrap } from "word";
import readline from "readline";

const rl = readline.createInterface(process.stdin, process.stdout);
let i = 0;

rl.setPrompt(`Text(${i}) = `);
rl.prompt();

rl.on("line", (line) => {
    console.log(wordWrap(3, line));

    i++;

    rl.setPrompt(`Text(${i}) = `);
    rl.prompt();
});

let closing = false;
rl.on("SIGINT", () => {
    if (closing) {
        rl.close();
        return;
    }

    closing = true;
    rl.question("Are you sure you want to exit (yes/no) ? ", (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            rl.close();
            return;
        }

        closing = false;
        rl.prompt();
    });
});
