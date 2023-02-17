export function wordWrap(rowSize: number, input: string): string[] {
    if (rowSize < 1) {
        throw new Error("invalid row size");
    }

    const result: string[] = [];
    const inputSize = input.length;

    for (let i = 0; i < inputSize; i += rowSize) {
        result.push(input.substring(i, i + rowSize));
    }

    return result;
}
