export class Anchor {
    constructor(public readonly url: string, public readonly text: string) {}

    static fromMarkdownExpression(anchorDelimiter: string): Anchor {
        const separator = "](";
        const start = "[".length;
        const visibleText = anchorDelimiter.substring(start, anchorDelimiter.indexOf(separator))
        const closingTag = ")";
        const end = anchorDelimiter.indexOf(closingTag, start);
        const url = anchorDelimiter.substring(anchorDelimiter.indexOf(separator) + separator.length, end)

        return new Anchor(url, visibleText)
    }

    markdownLinkInPage() {
        return `[${this.text}](${this.url})`
    }
    
    markdownLinkModified(key : string) {
        return `${this.text} ${key}`
    }

    isEqual(item: Anchor) {
        return this.url === item.url && this.text === item.text;
    }
}