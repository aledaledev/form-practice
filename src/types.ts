export type Props = {
  label: string;
  condition: string;
  placeholder: string;
  name: string;
  type: string;
  regExp?: RegExp;
};

export interface InputState {
  field:string
  valid:string | null
}

export interface InputProps {
  data: Props;
  state: InputState;
  setState: (value: InputState) => void;
  checkPassword?:()=> boolean
}
