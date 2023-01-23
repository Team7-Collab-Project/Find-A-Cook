import React, {useState} from 'react';

function UploadDocuments() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		//setIsSelected(true);
	};

	const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);

        fetch(
            'enter URL here',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

  return <div>
            <div><h2>Upload documents</h2></div>
            <div><h3>Upload Garda Vetting Document</h3></div>
            <input type='file' name='file' onChange={changeHandler} />
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>

            <div><h3>Upload Food Safety Document</h3></div>
            <input type='file' name='file' onChange={changeHandler} />
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
  </div>;
}


export default UploadDocuments;
