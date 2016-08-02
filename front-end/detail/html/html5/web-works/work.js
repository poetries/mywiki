postMessage('worker start');

onmessage = function (evt) {
	controller(evt.data);
};

function controller (data) {
	setTimeout(function () {
		postMessage({
			id: data.id,
			res: sum(data.end)
		});
	}, 100);
}

function sum(end) {
	var sum = 0;
	end = Math.floor(end);
	for(var i = 1; i < end;i++){
		sum += i;
	}
	return sum;
}