var work = new Worker("work.js");
work.onmessage = function(evt) {
    console.log(JSON.stringify(evt.data));
};

work.postMessage({
	id: 1,
	end: 10
});


work.postMessage({
	id: 2,
	end: 100
});

work.postMessage({
	id: 3,
	end: 1000
});