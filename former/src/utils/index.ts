import React from "react";

interface saveToFileProps {
	jsonData: any
	fileName: string
}

const saveToFile = ({ jsonData, fileName }: saveToFileProps) => {
	// Create a Blob containing the JSON data
	const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });

	// Create a download link
	const downloadLink = document.createElement('a');
	downloadLink.href = window.URL.createObjectURL(blob);
	downloadLink.download = fileName + '.json';

	// Trigger the download
	document.body.appendChild(downloadLink);
	downloadLink.click();

	// Clean up
	document.body.removeChild(downloadLink);
}

export { saveToFile };