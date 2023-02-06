import React, {useState} from 'react';
import BackButton from './components/BackButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function UploadDocuments() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

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
            if (!name.match("^[A-Za-z]{1,40}$")) {
                window.alert('Invalid name');
                return;
            }
            if (!surname.match("^[A-Za-z]{1,40}$")) {
                window.alert('Invalid surname');
                return;
            }
	};

    return (
        <><BackButton /><div >
            <form id="documentform" onSubmit={handleSubmission}>
                <div><h1>Become a Cook</h1></div>
                <br></br>
                <br />
                <label class='uploadbutton'>
                <input required type='file' name='file' onChange={changeHandler} />
                Upload Garda Vetting Document
                </label>
                <br></br>
                <label class='uploadbutton'>
                <input required type='file' name='file' onChange={changeHandler} />
                Upload Food Safety Document
                </label>
                <br />
                <label class='uploadbutton'>
                <input required type='file' name='file' onChange={changeHandler} />
                Upload Proof of Address
                </label>
                <br />
                <label class='uploadbutton'>
                <input required type='file' name='file' onChange={changeHandler} />
                Upload Proof of Identity
                </label>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                    <button type='submit' id='submit'>Submit</button>
                </div>
            </form>
        </div></>
    );
}


export default UploadDocuments;
