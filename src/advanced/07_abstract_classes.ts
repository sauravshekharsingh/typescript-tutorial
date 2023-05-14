abstract class Command {
  abstract commandLine(): string;

  execute() {
    console.log("Executing:", this.commandLine());
  }
}

// Abstract members do not have any implementation and the objective of the abstract class
// is for it to be inherited and then have an implementation defined

class GitResetCommand extends Command {
  commandLine() {
    return "git reset --hard";
  }
}

class GitFetchCommand extends Command {
  commandLine() {
    return "git fetch --all";
  }
}

new GitResetCommand().execute();
new GitFetchCommand().execute();

// new Command();
// Error: Cannot create an instance of an abstract class.

export {};
