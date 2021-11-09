export interface StartOptions {
  port?: number | undefined;
  quiet?: boolean | undefined;
  cwd?: string | undefined;
  logLevel?: 'normal' | 'verbose' | 'debug' | undefined;
  symlink?: boolean | undefined;
  env?: StartOptionsEnv | undefined;
}

export interface StartOptionsEnv {
  [name: string]: string | undefined;
}

export type Callback = (err: null | Error, data: string|undefined) => void;
