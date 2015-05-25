
function printFunction()
{
	var display_setting="toolbar=yes,location=no,directories=yes,menubar=yes,";
	display_setting+="scrollbars=yes,width=750, height=600, left=100, top=25";
	var content_innerhtml = document.getElementById("content-data").innerHTML;
	var document_print=window.open("","",display_setting);
	document_print.document.open();
	//document_print.document.write('<html><head><title>Print using javascript </title></head>');
	document_print.document.write('<body style="font-family:verdana; font-size:12px;" onLoad="self.print();self.close();" >');
	document_print.document.write(content_innerhtml);
	document_print.document.write('</body></html>');
	document_print.print();
	document_print.document.close();
	return false;
}