type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'checkbox' | 'radio'; // Agrega más tipos si es necesario

export interface IInputProps {
  type?: InputType;     
  placeholder?: string;
  name: string; 
  value: string;        
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  label?: string;       
  id?: string;          
  disabled?: boolean;   
}