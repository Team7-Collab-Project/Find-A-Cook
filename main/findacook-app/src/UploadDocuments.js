import React, {useState} from 'react';
import BackButton from './components/BackButton';

function UploadDocuments() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
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

    return (
        <><BackButton /><div id='documentform'>
            <div><h1>Upload documents</h1></div>
            <br></br>
            <div><h3>Upload Garda Vetting Document</h3></div>
            <label class='uploadbutton'>
            <input type='file' name='file' onChange={changeHandler} />
            Upload
            </label>

            <br></br>

            <div><h3>Upload Food Safety Document</h3></div>
            <label class='uploadbutton'>
            <input type='file' name='file' onChange={changeHandler} />
            Upload
            </label>
            <div>
                <button id='submit' onClick={handleSubmission}>Submit</button>
            </div>
        </div></>
    );
}


export default UploadDocuments;
