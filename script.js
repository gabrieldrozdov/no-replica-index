if (window.innerWidth > 600) {
	let preview = document.querySelector('.preview');
	let z = 0;
	let prevIframe;
	for (let link of document.querySelectorAll('.section-links a')) {
		let iframe;
		if (link.dataset.newtab == undefined) {
			link.addEventListener('mouseenter', () => {
				// Remove styling from all other links and activate this one
				for (let link of document.querySelectorAll('.section-links a')) {
					link.dataset.active = 0;
				}
				link.dataset.active = 1;
	
				// Style preview tab
				preview.dataset.newtab = 0;
				preview.dataset.active = 1;
	
				// Remove previous iframe
				if (prevIframe != undefined) {
					prevIframe.dataset.active = 0;
					const ref = prevIframe;
					setTimeout(() => {
						ref.remove();
					}, 600)
				}
	
				// Create new iframe
				iframe = document.createElement('a');
				let src = link.href;
				if (link.dataset.preview != undefined) {
					src = link.dataset.preview;
				}
				iframe.target = "_blank";
				iframe.href = src;
				iframe.innerHTML = `<iframe src="${src}"></iframe>`;
				iframe.dataset.active = 0;
				iframe.style.zIndex = z;
				z++;
	
				// Add iframe to DOM
				preview.appendChild(iframe);
				setTimeout(() => {
					iframe.dataset.active = 1;
				}, 5)
	
				// Track iframe to remove next time
				prevIframe = iframe;
			})
		} else {
			link.addEventListener('mouseenter', () => {
				// Remove styling from all other links and activate this one
				for (let link of document.querySelectorAll('.section-links a')) {
					link.dataset.active = 0;
				}
				link.dataset.active = 1;
	
				// Remove previous iframe
				if (prevIframe != undefined) {
					prevIframe.dataset.active = 0;
					const ref = prevIframe;
					setTimeout(() => {
						ref.remove();
					}, 600)
				}
	
				preview.dataset.newtab = 1;
			})
		}
	}
}