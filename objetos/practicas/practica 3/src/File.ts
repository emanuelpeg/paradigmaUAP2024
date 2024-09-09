import { Directory } from "./Directory";

export abstract class File {

  constructor(protected name: string, protected parent: Directory | null = null) {}

  getParent(): Directory | null {
    return this.parent;
  }

  getName(): string {
    return this.name;
  }

  getPath(): string {
    return this.parent ? `${this.parent.getPath()}/${this.name}` : `/${this.name}`;
  }
}