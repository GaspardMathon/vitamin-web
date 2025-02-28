import * as React from 'react';

import '@vtmn/css-checkbox';

export interface VtmnCheckboxProps
  extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * ID of the checkbox.
   * @type {string}
   */
  identifier: string;

  /**
   * Label text linked to the checkbox.
   * @type {string}
   * @default null
   */
  labelText?: string;

  /**
   * Label text linked to the checkbox.
   * @type {string}
   * @default null
   */
  name?: string;

  /**
   * Label text linked to the checkbox.
   * @type {string}
   * @default null
   */
  value?: string;

  /**
   * Label text linked to the checkbox.
   * @type {boolean}
   * @default false
   */
  checked?: boolean;

  /**
   * Label text linked to the checkbox.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean;
}

export const VtmnCheckbox = ({
  identifier,
  labelText,
  name,
  value,
  checked,
  disabled,
  ...props
}: VtmnCheckboxProps) => {
  return (
    <div>
      <input
        className="vtmn-checkbox"
        type="checkbox"
        id={identifier}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={identifier}>{labelText}</label>
    </div>
  );
};

export default React.memo(VtmnCheckbox);
