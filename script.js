var items = {
	"1": "apple",
	"2": "banana",
	"3": "cherry"
};
var msg = JSON.stringify(items, null, 3);

function Sumit(data) {
	for (var item in data) {
		console.log(`${item}: ${items[item]}`);
	}
}

function item() {
	console.log(msg);
}

Sumit(items)