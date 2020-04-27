//var editor; // use a global for the submit and return data rendering in the examples
var fname;
$(document).ready(function() {

});
function myGridFunc() {var editor
	var table = document.createElement('table');
table.setAttribute('id', 'example');
document.body.appendChild(table);
var obj

var request = $
.ajax({
	type : 'GET',
	contentType: "application/json",
	url : 'http://localhost:8080/proweb552_32/proweb552_32/restDemo',
	async : false,
	dataType : 'json',
	success : function(data) {

		data = buildGridFunc(data);
		// var myObj = JSON.parse(myJSON);
		var myJSON = JSON.stringify(data);
		console.log("RESPONSE data" + myJSON);
		// Add row identifier attribute "DT_RowId" in json output.
		var keys = [];
		var len = data.length;

		for (i = 0; i < len; i++) {
			data[i].DT_RowId = "row_" + (i + 1);

		}

		// add the hidden columns in hiddenCols Array example:-
		// hiddenCols = ["a","b","c"]
		var hiddenCols = [ "DT_RowId" ];
		var isHidden = false;
		// get Keys of json data
		for ( var k in data[0]) {
			var isHidden = false;
			for (m = 0; m < hiddenCols.length; m++) {
				if (hiddenCols[m] == k) {
					isHidden = true;
					break;
				}

			}

			if (!isHidden) {
				keys.push(k);
			}

		}

		// build grid columns based on keys

		var objArray = [];
		var objEditArray = [];
		var checkBoxCol = {
				data : null,
				defaultContent : '',
				className : 'select-checkbox',
				orderable : false
		};

		objArray.push(checkBoxCol);

		for (i = 0; i < keys.length; i++) {
			var jobj;
			var eobj;

			jobj = {
					"title" : keys[i],
					"data" : keys[i]
			};
			objArray.push(jobj);

			eobj = {
					"label" : keys[i],
					"name" : keys[i]
			};
			objEditArray.push(eobj);

		}

		// dataTables editor code
		editor = new $.fn.dataTable.Editor({

			table : "#example",
			fields : objEditArray
		});

		// Activate an inline edit on click of a table cell
		$('#example').on('click', 'tbody td:not(:first-child)',
				function(e) {
			editor.inline(this);
		});

		editor.on('open', function(e, type) {

			// $("#DTE_Field_id").prop("readonly", true);
		});
		$('#example')
		.DataTable(
				{
					dom : "Bfrtip",
					data : data,
					order : [ [ 1, 'asc' ] ],
					columns : objArray,
					"columnDefs" : [ {
						"targets" : [ 1,7 ],
						"visible" : false
					} ],
					select : {
						style : 'os',
						selector : 'td:first-child'
					},
buttons : [
{
	extend : "create",
	editor : editor,
	formButtons : [ {
		label : 'Create',
		fn : function() {
			var newObj = {
					"cust_id" : $(
					"#DTE_Field_cust_id")
					.val(),
					"last_name" : $(
					"#DTE_Field_last_name")
					.val(),
					"first_name" : $(
					"#DTE_Field_first_name")
					.val(),
					"address1" : $(
					"#DTE_Field_address1")
					.val(),
					"city" : $(
					"#DTE_Field_city")
					.val(),
					"phone" : $(
					"#DTE_Field_phone")
					.val(),
					"rent_amount" : $(
					"#DTE_Field_rent_amount")
					.val(),
					"num_rentals" : $(
					"#DTE_Field_num_rentals")
					.val(),
					"member_status" : $(
					"#DTE_Field_member_status")
					.val(),
					
			}
			
			var request = $
			.ajax({
				type : 'POST',
				contentType: "application/json",
				url : 'http://localhost:8080/proweb552_32/proweb552_32/restDemo',
				async : false,
				dataType : 'json',
				data : JSON.stringify(newObj),
				success: function (data) {
					
					console.log("RESPONSE"+data);
		
				},
				error: function (exp,test) {
					
					console.log("err"+JSON.stringify(exp));
					console.log("TEST"+JSON.stringify(test));
					
				}
			});

			this.close();
			location.reload();
		}
	}

	]

	},
	{
		extend : "edit",
		editor : editor,
		formButtons : [ {
			label : 'Update',
			fn : function() {
				
				var table = $(
				'#example')
				.DataTable();
				var tdval = table
				.rows(
				{
					selected : true
				})
				.data()
				var id = tdval[0].cust_id;
			
				//fname = tdval[0].First_Name

				var url = 'http://localhost:8080/proweb552_32/proweb552_32/restDemo'+'/'+id;
				
				
					
				var newObj = {
						"cust_id" : $(
						"#DTE_Field_cust_id")
						.val(),
						"last_name" : $(
						"#DTE_Field_last_name")
						.val(),
						"first_name" : $(
						"#DTE_Field_first_name")
						.val(),
						"address1" : $(
						"#DTE_Field_address1")
						.val(),
						"city" : $(
						"#DTE_Field_city")
						.val(),
						"phone" : $(
						"#DTE_Field_phone")
						.val(),
						"rent_amount" : $(
						"#DTE_Field_rent_amount")
						.val(),
						"num_rentals" : $(
						"#DTE_Field_num_rentals")
						.val(),
						"member_status" : $(
						"#DTE_Field_member_status")
						.val(),
				} ;
				
				var request = $
				.ajax({
					type : 'PUT',
					url : url,
					async : false,
					dataType : 'json',
					contentType: "application/json",
					data : JSON.stringify(newObj),
					success : function(
							data) {
						console.log("PUT"+data);
					},
					error : function(
							data,
							err) {
						console
						.log(
								"err",
								err,
								unescape(data.name));
					}
				});

				this.close();
				location.reload();
			}
		}

		]

	},
	{
		extend : "remove",
		editor : editor,
		formButtons : [ {
			label : 'Delete',
			fn : function() {
				var table = $(
						'#example')
						.DataTable();
				var tdval = table
				.rows(
						{
							selected : true
						})
						.data()
						var id = tdval[0].cust_id;

				var url = 'http://localhost:8080/proweb552_32/proweb552_32/restDemo'+'/'+id;

				var request = $
				.ajax({
					type : 'DELETE',
					url : url,
					async : false,
					dataType : 'json',
					contentType: "application/json",
					success : function(
							data) {
						console.log("Delete"+data);
					},
					error : function(
							data,
							err) {
						console
						.log(
								"err",
								err,
								unescape(data.name));
					}
				});

				this.close();
				location.reload();
			}
		}

		]

	} ]
});
	},
	error : function(data, err) {
		console.log("err", err, unescape(data.name));
	}
});

}

function buildGridFunc(data) {

	obj = data;
	var len = Object.keys(obj.members).length;
	var Gridjsondata = "{";
	for (j = 0; j < len; j++) {

		var mocc = obj.members[j].mocc;

		if (mocc == 0) {
			var datalen = Object.keys(obj.members[j].data).length;
			if (datalen == 0) {
				var wname = obj.members[j].wname;
				Gridjsondata += '"' + wname + '":[';
				var value = " ";
				Gridjsondata += '"' + value + '",';
			} else {
				var wname = obj.members[j].wname;

				Gridjsondata += '"' + wname + '":[';
				for (k = 0; k < datalen; k++) {
					var value = obj.members[j].data[k].val;
					Gridjsondata += '"' + value + '",';

				}
			}

			var ind = Gridjsondata.lastIndexOf(",");
			Gridjsondata = Gridjsondata.substring(0, ind);
			Gridjsondata += "],";
		}

	}
	var indx = Gridjsondata.lastIndexOf(",");
	Gridjsondata = Gridjsondata.substring(0, indx);
	Gridjsondata += "}";
	console.log("gridjsondata" + Gridjsondata);
	var gobj = JSON.parse(Gridjsondata);
	var newobj = transpose(gobj, [ null ]);
	var res1 = JSON.stringify(newobj)
	console.log("res1" + res1);
	return newobj;
}

function transpose(obj, exclusions) {
	
	var result;
	var arr;
	var len = 0;
	var arraynames = [];
	var i, j;

	if (obj == null) {
		return null;
	}
	/* Build property name list in arraynames */
	for (prop in obj) {
		if (exclusions.indexOf(prop) == -1) {
			arraynames.push(prop);
		}

	}
	/* Find maximum array length from all arrays in obj that
	 * we're going to use.
	 */
	for (i = 0; i < arraynames.length; i++) {
		arr = obj[arraynames[i]];
		
		if (arr != null && arr.length > len) {
			len = arr.length;
		}
	}
	/* Create result array and assign properties for each occurrence */
	result = new Array(len);
	for (j = 0; j < len; j++) {
		result[j] = new Object();

		for (i = 0; i < arraynames.length; i++) {
			arr = obj[arraynames[i]];

			result[j][arraynames[i]] = (j < arr.length) ? arr[j] : null;
		}
	}
	return result;
}
