import isChecked from '../../../assets/Form/checkboxTrue.svg';
import isUnChecked from '../../../assets/Form/checkboxFalse.svg';

interface FormCheckBox {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

function FormCheckBox({ checked, disabled, onChange }: FormCheckBox) {
  return (
    <label className="FormCheckBox">
      <div className="FormCheckBox__wrapper">
        <input
          type="checkbox"
          className="FormCheckBox__input"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <img
          className="FormCheckBox__icon"
          src={checked ? isChecked : isUnChecked}
          alt=""
        />
      </div>
      <span>자동 로그인</span>
    </label>
  );
}

export default FormCheckBox;
