(function() {
	'use strict';
	function Stars() {
		var me = this;
		var canEle = document.getElementById('dvCanvas');
		var can = canEle.getContext('2d');
		var height = 0;
		var width = 0;

		var mdDefault = 150;
		var mdHover = 500;
		var mdDec = true;

		var max = 200;
		var distance = 100;
		var mouseDistance = mdDefault;

		var stars = new Array(max);
		var mouse = {
			x: width / 2,
			y: height / 2
		};

		var defaultRed = 255;
		var defaultGreen = 255;
		var defaultBlue = 255;

		var red = defaultRed;
		var green = defaultGreen;
		var blue = defaultBlue;

		var targetRed = red;
		var targetGreen = green;
		var targetBlue = blue;

		var speedDefault = 1;
		var speed = speedDefault;

		var maxTime = 0;

		var moving = false;
		var resizeTimer;

		me.start = function() {
			if (navigator.appVersion.match('Chrome')) {
				max = 300;
			}
			setSize();
			window.onresize = resize;
			createStars();
			run();
			document.onmousemove = mousemove;
		};

		function mousemove(event) {
			mouse.x = event.pageX;
			mouse.y = event.pageY;
		}

		function run() {
			clean();
			drawStars();
		}

		function drawStars() {
			var i, time, dist, nDate;
			for (i = 0; i < max; i++) {
				stars[i].connected = [];
			}

			time = new Date();

			setColors();
			can.lineWidth = 1;
			dist = 0.0;

			if (mdDec && mouseDistance > mdDefault) {
				mouseDistance -= 80;
			} else if (!mdDec && mouseDistance < mdHover) {
				mouseDistance += 80;
			}

			for (i = 0; i < max; i++) {
				if (!moving) {
					moveStar(stars[i]);
				}

				var star = stars[i];

				dist = Math.sqrt(Math.pow(star.x - mouse.x, 2) + Math.pow(star.y - mouse.y, 2));

				if (dist < mouseDistance * 2) {
					can.fillStyle = 'rgb('.concat(red, ',', green, ',', blue, ')');
				} else {
					can.fillStyle = 'rgba('.concat(red, ',', green, ',', blue, ', 0.3)');
				}

				can.fillRect(star.x, star.y, star.size / 2, star.size);

				can.beginPath();
				if (dist < mouseDistance) {
					star.arc = true;

					for (var j = 0; j < max; j++) {
						var refStar = stars[j];

						if (star == refStar || refStar.connected.indexOf(star) != -1) {
							continue;
						}

						if (
							Math.abs(star.x - refStar.x) < distance &&
							Math.abs(star.y - refStar.y) < distance
						) {
							star.connected.push(refStar);
							drawRelation(star, refStar);
						}
					}
				} else {
					star.arc = false;
				}

				can.stroke();
				can.closePath();
			}

			for (i = 0; i < max; i++) {
				if (stars[i].arc) {
					arc(stars[i]);
				}
			}

			nDate = new Date();
			time = nDate.getTime() - time.getTime();

			if (time > maxTime) {
				maxTime = time;
			}

			setTimeout(run, (1000 / 30) - time); // should be at the end, so that the procedure can not overtake
		}

		function arc(star) {
			var r = star.size * 2;
			can.drawImage(star.cache, star.x - r, star.y - r, r * 2, r * 2);
		}

		function setColors() {
			var percent = 10,
				tick;

			if (targetRed != red) {
				tick = Math.floor(Math.abs(targetRed - red) / percent);

				if (targetRed > red) {
					red += tick;
				} else {
					red -= tick;
				}
			}
			if (targetGreen != green) {
				tick = Math.floor(Math.abs(targetGreen - green) / percent);

				if (targetGreen > green) {
					green += tick;
				} else {
					green -= tick;
				}
			}
			if (targetBlue != blue) {
				tick = Math.floor(Math.abs(targetBlue - blue) / percent);

				if (targetBlue > blue) {
					blue += tick;
				} else {
					blue -= tick;
				}
			}

			can.fillStyle = 'rgb('.concat(red, ',', green, ',', blue, ')');
			can.strokeStyle = 'rgba('.concat(red, ',', green, ',', blue, ', 0.3)');
		}

		function drawRelation(star, refStar) {
			can.moveTo(star.x | 0, star.y | 0);

			if (true) {
				can.lineTo(refStar.x | 0, refStar.y | 0);
				return;
			} else {
				var midX = Math.max(star.x, refStar.x) - (Math.max(star.x, refStar.x) - Math.min(star.x, refStar.x)) / 2;
				var midY = Math.max(star.y, refStar.y) - (Math.max(star.y, refStar.y) - Math.min(star.y, refStar.y)) / 2;

				if (star.curve > 0) {
					midX += 20;
					midY += 20;
				} else {
					midX -= 20;
					midY -= 20;
				}
			}
		}

		function moveStar(star) {
			star.x += star.dirX * speed;
			star.y += star.dirY * speed;

			if (star.y > height) {
				star.dirY = Math.random() * -1;
			} else if (star.y < 0) {
				star.dirY = Math.random();
			} else if (star.x > width) {
				star.dirX = Math.random() * -1;
			} else if (star.x < 0) {
				star.dirX = Math.random();
			}

			return star;
		}

		function clean() {
			can.fillStyle = '#1e2229';
			can.fillRect(0, 0, width, height);
		}

		function createStars() {
			for (var i = 0; i < max; i++) {
				stars[i] = createStar();
			}
		}

		function createStar() {
			var star = {
				x: Math.random() * width,
				y: Math.random() * height,
				dirX: (Math.random() - 0.5),
				dirY: (Math.random() - 0.5),
				size: Math.ceil(Math.random() * 3),
				curve: (Math.random() - 0.5),
				line: (Math.random() - 0.5),
				arc: false
			};

			initCache(star);

			return star;
		}

		function initCache(star) {
			var cache = document.createElement('canvas');
			var c = cache.getContext('2d');
			var r = star.size * 2;

			cache.setAttribute('width', star.size * 4);
			cache.setAttribute('height', star.size * 4);

			c.fillStyle = 'rgba(255, 255, 255, 0.75)';
			c.beginPath();
			c.arc(r, r, r, 0, 2 * Math.PI);
			c.fill();

			star.cache = cache;
		}

		function resize() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				setSize();
			}, 100);
		}
		function setSize() {
			height = canEle.parentElement.offsetHeight;
			width = canEle.parentElement.offsetWidth;
			canEle.style.width = ''.concat(width, 'px');
			canEle.style.height = ''.concat(height, 'px');
			canEle.setAttribute('width', width);
			canEle.setAttribute('height', height);
		}

	}

	var stars = new Stars();
	stars.start();
})();