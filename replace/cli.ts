import { parse } from "https://deno.land/std@0.76.0/flags/mod.ts";
interface Args {
    // help
    h?: boolean;
    help?: boolean;
    // pattern
    p?: string;
    // replacement string
    s?: string;
    // file with replacement content
    f?: string;
}
main(parse(Deno.args) as Args);
async function main(args: Args) {
    if (args.h || args.help) {
        console.log(`USAGE:
    cat file.txt > deno run --allow-read https://deno.land/x/replace/cli.ts -p "pattern" -s "replacement string"
    cat file.txt > deno run --allow-read https://deno.land/x/replace/cli.ts -p "pattern" -f path/to/replacement.txt
`);
        return;
    }
    if (args.p === undefined) {
        throw new Error(`"-p" option must be provided. Pass "-h" to see the usage example.`);
    }
    if (args.s === undefined && args.f === undefined) {
        throw new Error(`"-s" or "-f" options must be provided. Pass "-h" to see the usage example.`);
    }
    const source = new TextDecoder("utf-8").decode(
        await Deno.readAll(Deno.stdin)
    );
    if (args.s !== undefined) {
        console.log(source.replace(new RegExp(args.p), args.s));
    } else {
        if (!args.f) throw new Error("can't happen");
        console.log(
            source.replace(new RegExp(args.p), await Deno.readTextFile(args.f))
        );
    }
}
