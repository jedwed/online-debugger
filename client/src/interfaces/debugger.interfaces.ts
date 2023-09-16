export interface Variable {
  name: string;
  type: string;
  value: string;
}

export interface FrameState {
  args: Variable[];
  locals: Variable[];
  line: number;
}
