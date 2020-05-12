import React from 'react';
import PropTypes from 'prop-types';

const PageTabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			className="tab-panel"
			role="tabpanel"
			// hidden={value !== index}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{/*{value === index && (*/}
			{/*	<div>*/}
					{children}
				{/*</div>*/}
			{/*)}*/}
		</div>
	);
};

PageTabPanel.propTypes = {
	value: PropTypes.number,
	index: PropTypes.number,
};

export default PageTabPanel;
