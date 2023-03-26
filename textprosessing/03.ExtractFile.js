function fileExtract(str){
	let files=str.substring(2,str.length)
	let filenameExtension=files.lastIndexOf('\\');
	let substrfile=files.substring(filenameExtension+1,str.length)

	let fileinfo=substrfile.split('.');

	if(fileinfo.length>2){
		console.log(`File name: ${fileinfo[0]+'.'.concat(fileinfo[1])}`);
		console.log(`File extension: ${fileinfo[2]}`);
	}else{
		console.log(`File name: ${fileinfo[0]}`);
		console.log(`File extension: ${fileinfo[1]}`);
	}

}

fileExtract('C: template.bak.pptx')