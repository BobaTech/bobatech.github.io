$(document).ready(function(){
	$(".code").typed({
		strings: [
			"function processData(data){\n\treturn data.map(function(row){\n\t\treturn [row.id, row.name, row.content];\n\t^500}\n^500}\nmodule.exports = processData;",
			"public abstract class Socket {\n\tprotected Connection con;\n\tpublic abstract boolean connect(Connection c);\n}",
			"import json\nwith open(\"data.json\", \"r\") as f:\n\tdata = json.loads(f)\nfor row in data:\n\tprint row",
			"<?php\n$mysqli = mysqli_connect(\"kwaiwan.com\", \"admin\", \"1234\");\n$res = mysqli_query($mysqli, \"SELECT * FROM users\");\n$row = mysqli_fetch_assoc($res);\necho $row[\"_msg\"];\n?>",
			"function Node(parent){\n\tthis.node = parent; \n}\n\nvar root = new Node(null);\nvar child = new Node(root);",
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
