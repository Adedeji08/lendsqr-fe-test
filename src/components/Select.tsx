import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const Select = ({
    id,
    type = 'text',
    label,
    values = [],
    options = [],
    valuesOptions,
    onChange,
    placeholder,
    controlled = false,
    className = '',
    appearance = 'block',
    initialValue = '',
    required = false,
    ...props
}: any) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event: any) => {
        const { name, value } = event.target;

        setValue(value);

        if (onChange && name) {
            onChange && onChange({ name, value });
        }
    };
    //defaultValue
  return (
    <div>
            {label && <label htmlFor={id}>{label}</label>}
            <select
                {...props}
                id={id}
                // className="form-control"
                value={controlled ? initialValue : value}
                onChange={handleChange}
                required={required}
            >
                
                {placeholder && (
                    <option disabled  value="">
                        {placeholder}
                    </option>
                )}
                {!valuesOptions
                    ? values.map((v: any, index: any) => (
                          <option key={v} value={v}>
                              {options[index] || v}
                          </option>
                      ))
                    : valuesOptions.map(({ option: o, value: v, key: k }: any, index: any) => (
                          <option key={k + index} value={v}>
                              {o || v}
                          </option>
                      ))}
            </select>
        </div>
  )
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
    controlled: PropTypes.bool,
    appearance: PropTypes.string,
    placeholder: PropTypes.string,
    initialValue: PropTypes.string,
    valuesOptions: PropTypes.arrayOf(PropTypes.object),
}

