import {FileSystem} from "./filesystem";
import {MarkdownPage} from "./MarkdownPage";

export class MarkDownTransformer {
    constructor(private fileSystem: FileSystem = new FileSystem()) {}

    transform(inputPath: string, outputPath: string) {
        if(!this.fileSystem.exists(inputPath)) {
            throw new Error("Input file does not exists")
        }
        if(this.fileSystem.exists(outputPath)) {
            throw new Error("Output file already exists")
        }
        const markdownPage = this.fileSystem.readContent(inputPath)
        const transformedMarkDown = this.turnLinksIntoFooter(markdownPage)
        this.fileSystem.write(outputPath, transformedMarkDown)
    }

    private turnLinksIntoFooter(markdownPage: string): string {
        return new MarkdownPage(markdownPage).moveLinksToFootNotesWithAnchors()
    }
}