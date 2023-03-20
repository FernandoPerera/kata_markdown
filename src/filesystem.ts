import * as fs from "fs";

export class FileSystem {

    exists(inputPath: string) {
        return fs.existsSync(inputPath)
    }

    readContent(inputPath: string): string {
        return fs.readFileSync(inputPath).toString()
    }

    write(outputPath: string, transformedMarkDown: string): void {
        fs.writeFileSync(outputPath, transformedMarkDown)
    }
    
}