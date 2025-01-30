import isChecked from '../../../assets/Form/checkboxTrue.svg';
// import isUnChecked from '../../../assets/Form/checkboxFalse.svg';
import Tooltip from '../UI/Tooltip';
import '../../../styles/Coupang/Form/FormCheckBox.css';

interface FormCheckBox {
  checked: boolean;
  disabled?: boolean;
  tooltipText?: string;
  onChange: (checked: boolean) => void;
}

function FormCheckBox({
  checked,
  disabled,
  tooltipText,
  onChange,
}: FormCheckBox) {
  return (
    <div className="FormCheckBox">
      <input
        type="checkbox"
        className="FormCheckBox__input"
        id="autoLogin"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="FormCheckBox__label" htmlFor="autoLogin">
        {checked ? (
          <img className="FormCheckBox__icon" src={isChecked} alt="" />
        ) : (
          <div className="FormCheckBox__box" />
        )}
        <span className="FormCheckBox__text">자동 로그인</span>
      </label>
      {checked && tooltipText && <Tooltip text={tooltipText} direction="top" />}
    </div>
  );
}

export default FormCheckBox;
