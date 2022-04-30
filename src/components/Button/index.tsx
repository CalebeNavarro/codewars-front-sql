import { StudentInfo } from './../../providers/NameEnabler';
import { ButtonStyle } from './style';

interface ButtonProviders {
  pointerName: string
}

const Button = ({ pointerName }: ButtonProviders) => {
  const { name, setCurrentName } = StudentInfo();
  let target = false;
  
  if(pointerName === name){
    target = true
  }
  
  return (
    <ButtonStyle target={target.toString()} onClick={() => setCurrentName(pointerName)} >
      {pointerName}
    </ButtonStyle>
  )
}

export default Button;