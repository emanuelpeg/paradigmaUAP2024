import { File } from "./File";

export class DataFile extends File {
  private data: string = '';

  setData(data: string): void {
    this.data = data;
  }

  getData(): string {
    return this.data;
  }
}