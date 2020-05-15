var rotatingSquare = document.getElementById("web-animation").animate( // everything is bound properly
	[
		{ backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)' }, // 0%
		{ backgroundColor: '#440000', opacity: 0.3 }, // 50%
		{ backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)' } // 100%
	],
	{
		duration: 500,
		iterations: Infinity, // capitalized
		easing: 'ease-in-out'
	},
);
