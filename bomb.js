/* Bomb creature
 *----------------------------------
 * 1.the bomb creature getting bigger every time click or taped.
 * 2.The bomb creature is disabled when it become certain size, then pop up alert.
 * 3.reset the bomb creature size with button.
 */

'use strict';

{
	const amp      = 20,  // amplification value
		  bomb     = document.getElementById('bomb'),
		  bombWrap = document.getElementById('bomb-wrapper'),
		  wrap     = document.getElementById('wrapper'),
		  reset    = document.getElementById('reset');

    // Bomb creature's position
	bombWrap.style.height = window.innerHeight - wrap.clientHeight + 'px';

	bomb.addEventListener('click' , function(e) {
		let bcw = this.clientWidth,
			bch = this.clientHeight,
			ww  = window.innerWidth,
			wh  = window.innerHeight;
		
		if ( bcw > ww * 0.8 || bch > wh * 0.6 ) {
			this.disabled = false;
			alert("Stop! the creature is about to expload!!");
			reset.style.display = 'block';
			return;
		}

		bcw += amp;
		bch += amp;

		this.style.width = bcw + 'px';
		this.style.height = bch + 'px';

		e.stopPropagation();
	});

	// reset the bomb creature size
	reset.addEventListener('click',function() {
		let bcw = this.clientWidth,
			bch = this.clientHeight;

		bomb.removeAttribute('style');
		this.style.display = 'none';
	});
}