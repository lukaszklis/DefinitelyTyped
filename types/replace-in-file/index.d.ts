// Type definitions for replace-in-file 3.1.x
// Project: https://github.com/adamreisnz/replace-in-file
// Definitions by: Łukasz Kliś <https://lukaszklis.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ReplaceInFileToCallback = (match: string) => string;

interface ReplaceInFileOptions {
    allowEmptyPaths?: boolean;
    ignore?: string[];
    encoding?: string;
    disableGlobs?: boolean;
    files?: string;
    from?: string | RegExp | string[] | RegExp[];
    to?: string | RegExp | string[] | RegExp[] | ReplaceInFileToCallback;
    isRegex?: boolean;
    verbose?: boolean;
}

declare module 'replace-in-file' {
    function replaceInFile(options: ReplaceInFileOptions, callback: (error: Error, changes: string[]) => void): string[];
    function replaceInFile(options: ReplaceInFileOptions): Promise<string[]>;

    namespace replaceInFile {
        function sync(options: ReplaceInFileOptions): Promise<string[]>;
    }

    export = replaceInFile;
}
