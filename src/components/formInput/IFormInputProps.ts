export interface IFormInputProps {
    value: string;
    name: string;
    type: string;
    required: boolean;
    label?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
