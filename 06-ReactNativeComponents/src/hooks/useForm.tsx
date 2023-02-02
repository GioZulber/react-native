import {useState} from 'react';
import {UserForm} from '../interfaces/appInterfaces';

export const useForm = (initState: UserForm) => {
  const [state, setState] = useState<UserForm>(initState);

  const onChange = <K extends Object>(value: K, field: keyof UserForm) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return {
    ...state,
    form: state,
    onChange,
  };
};
