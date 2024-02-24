const addLoopingListener = (audio: HTMLAudioElement) => {
	audio.addEventListener('ended', () => {
		audio.currentTime = 0; // Reset the audio to the beginning
		audio.play(); // Start playback again
	});
};

// Create audio elements
const m00 = new Audio('/music/M00.mp3');
const m01 = new Audio('/music/M01.mp3');
const m02 = new Audio('/music/M02.mp3');
const m03 = new Audio('/music/M03.mp3');
const m04 = new Audio('/music/M04.mp3');
const m05 = new Audio('/music/M05.mp3');
const m06 = new Audio('/music/M06.mp3');
const m07 = new Audio('/music/M07.mp3');
const m08 = new Audio('/music/M08.mp3');
const m09 = new Audio('/music/M09.mp3');
const m10 = new Audio('/music/M10.mp3');

// Add looping listeners to each audio element
addLoopingListener(m00);
addLoopingListener(m01);
addLoopingListener(m02);
addLoopingListener(m03);
addLoopingListener(m04);
addLoopingListener(m05);
addLoopingListener(m06);
addLoopingListener(m07);
addLoopingListener(m08);
addLoopingListener(m09);
addLoopingListener(m10);

// Play audio function
export const playAudio = (no: number) => {
	pauseAll();

	switch (no) {
		case 0:
			m00.play();
			break;
		case 1:
			m01.play();
			break;
		case 2:
			m02.play();
			break;
		case 3:
			m03.play();
			break;
		case 4:
			m04.play();
			break;
		case 5:
			m05.play();
			break;
		case 6:
			m06.play();
			break;
		case 7:
			m07.play();
			break;
		case 8:
			m08.play();
			break;
		case 9:
			m09.play();
			break;
		case 10:
			m10.play();
			break;
	}
};

// Pause all audio function
const pauseAll = () => {
	m00.pause();
	m01.pause();
	m02.pause();
	m03.pause();
	m04.pause();
	m05.pause();
	m06.pause();
	m07.pause();
	m08.pause();
	m09.pause();
	m10.pause();
};
