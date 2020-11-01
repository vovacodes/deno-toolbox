# `replace`
CLI utility for replacing patterns of text.

## Usage
You can use it with `deno run`:
 
```sh
$ cat file.txt > deno run --allow-read https://deno.land/x/replace/cli.ts -p "pattern" -s "replacement string"
$ cat file.txt > deno run --allow-read https://deno.land/x/replace/cli.ts -p "pattern" -f path/to/replacement.txt
```

or install it as an executable:
```sh
$ deno install -f -n replace --allow-read https://deno.land/x/replace/cli.ts
```

and use it as follows:
```sh
$ cat file.txt > replace -p "${answer}" -s "42"
``` 