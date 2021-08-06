const del = require('del')
const deleteDistFiles = async () => {
    
	const deletedPaths = await del(["dist/*", "!dist/assets"], { dryRun: false});

	console.log(
		"Files and directories that would be deleted:\n",
		deletedPaths.join("\n")
	);
};

deleteDistFiles()