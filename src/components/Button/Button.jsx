import './Button.css';

function Button() {
	const clicked = () => {
		console.log('clicked!');
	};

	return (
		<button onClick={clicked} className="button accent">
			Save all
		</button>
	);
}

export default Button;
