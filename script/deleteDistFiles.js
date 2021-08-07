const del = require('del')

// delete bundled result in dist folder, except dist/assets folder
const deleteDistFiles = async () => {
    
	const deletedPaths = await del(["public/*", "!public/assets"], { dryRun: false});

	console.log(
		"Files and directories that would be deleted:\n",
		deletedPaths.join("\n")
	);
};

deleteDistFiles()