import { File } from "./File";

export class Directory extends File {
  private children: File[] = [];

  public add(file: File): void {
    this.children.push(file);
  }

  public remove(file: File): void {
    const index = this.children.indexOf(file);
    this.children.splice(index, 1);
  }

  public getChildren(): File[] {
    return [...this.children];
  }

  public getChild(name: string): File | null {
    return this.children.find(child => child.getName() === name) ?? null;
  }
}