$(document).ready(function(){
	$(".code").typed({
		strings: [
			"function processData(data){\n\treturn data.map(function(row){\n\t\treturn [row.id, row.name, row.content];\n\t^500}\n^500}\nmodule.exports = processData;",
			"function Node(parent){\n\tthis.node = parent; \n}\n\nvar root = new Node(null);\nvar child = new Node(root);",
			"import json\nwith open(\"data.json\", \"r\") as f:\n\tdata = json.loads(f)\nfor row in data:\n\tprint row"
			],
		contentType: "text",
		typeSpeed: 1,
		backSpeed: 1,
		backDelay: 1000,
		cursorChar: "_",
		onStringTyped: function() {
			$(".code").append("<span class='typed-cursor'>_</span>")
		},
		showCursor: false
	})		
});
