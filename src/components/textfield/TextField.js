import React from 'react';
import styles from './TextField.module.css';
import { MdError } from 'react-icons/md';

const TextField = ({ inputType, inputsValue, handleInputValue }) => {
	
	return (
		<div className={styles.textField}>
			<div className={styles.textField__Ctn}>
				<input
					onChange={handleInputValue}
					value={inputsValue[inputType]}
					type="text"
					name={inputType}
					className={[ styles.textField__input, 
						         styles[`textField__input--type-${inputType}`] ].join(' ')}
					disabled={inputType === 'disabled' ? 'disabled' : ''}
				/>
				{inputType==="error" && <MdError className={styles.textField__errorIcon} />}
				<label
					className={
						inputType === 'disabled' ? (
							[	styles.textField__labelText, 
								styles[`textField__labelText--disabled`] ].join(' ')
						
						) : inputsValue[inputType] !== '' ? (
							styles[`textField__labelText--top`]
							
						) : (
							styles.textField__labelText
						)
					}
				>
					Text
				</label>
				<div className={styles.textField__underLine} />
			</div>
			<span
				className={[ styles.textField__helpText, styles[`textField__helpText--type-${inputType}`] ].join(' ')}
			>
				Help text:
			</span>
		</div>
	);
};

export default TextField;