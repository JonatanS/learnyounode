	
	//https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback
	// if options (second arg) is a 'string', it is used to specify the encoding:

	var fs = require('fs');
	
	fs.readFile(process.argv[2],'utf8', function(err, data){
		if(err === null) {
			//data is the entire content of the file:
			var numNewLines = data.split('\n').length -1;
			console.log(numNewLines);
		} else {
			console.log(err.message);
		}

	});