import { DataFile } from "./DataFile";
import { Directory } from "./Directory";
import { TerminalInterface } from "./TerminalInterface";

type Command = 'mkdir' | 'touch' | 'cd' | 'ls' | 'lsp' | 'cat' | 'pwd' | 'close';
const validCommands: Command[] = ['mkdir', 'touch', 'cd', 'ls', 'lsp', 'cat', 'pwd', 'close'];

export class Terminal {
  private current: Directory = new Directory('', null);
  private io: TerminalInterface = TerminalInterface.getInstance();

  async open() {
    while (true) {
      const [command, arg] = (await this.io.read()) as [Command, string];
      try {
        if (!validCommands.includes(command)) {
          throw new Error('Invalid command');
        }
        if (command === 'close') {
          break;
        }
        const response = this[command](arg);
        if (response) {
          this.io.write(response);
        }
      } catch (error) {
        const message = (error as Error).message ?? 'An error occurred';
        this.io.write(message);
      }
    }
  }

  mkdir(name: string) {
    this.current.add(new Directory(name, this.current));
  }

  touch(name: string) {
    this.current.add(new DataFile(name, this.current));
  }

  cd(path: string) {
    if (path === './') { return }
    const target = path === '..'
      ? this.current.getParent()
      : this.current.getChild(path);
    if (target instanceof Directory) {
      this.current = target;
    } else {
      throw new Error('Invalid path');
    }
  }

  ls() {
    return this.current.getChildren().map(child => child.getName()).sort().join('\n');
  }

  lsp() {
    const file = new DataFile('display.txt', this.current);
    file.setData(this.ls());
    this.current.add(file);
  }

  cat(name: string) {
    const file = this.current.getChild(name);
    if (file instanceof DataFile) {
      return file.getData();
    } else {
      throw new Error('Invalid file');
    }
  }

  pwd() {
    return this.current.getPath();
  }
}