import React from 'react';

import useMightyMouse from 'react-hook-mighty-mouse';
import '../styles/eyesFollow.scss';

const EyesFollow = () => {
	const {
		selectedElement: {
			position: { angle: angleLeftEye },
		},
	} = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
	const {
		selectedElement: {
			position: { angle: angleRightEye },
		},
	} = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });

	let rotateLeftEye = '';
	let rotateRightEye = '';

	if (angleLeftEye !== null && angleRightEye !== null) {
		rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
		rotateRightEye = `rotate(${-angleRightEye}deg)`;
	}

	return (
		<div className="eyes-follow">
			<div className="eyes">
				<div
					id="left-eye"
					className="eye"
					style={{ transform: rotateLeftEye }}
				>
					<div className="pupil" />
				</div>
				<div
					id="right-eye"
					className="eye"
					style={{ transform: rotateRightEye }}
				>
					<div className="pupil" />
				</div>
			</div>
		</div>
	);
};

export default EyesFollow;
