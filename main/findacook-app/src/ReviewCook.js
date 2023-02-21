


function ReviewCook() {

    const handleSubmission = () => {

    };
    return(
    <div >
        <form id="documentform" onSubmit={handleSubmission}>
            <div><h1>Review A Cook</h1></div>
            <br></br>
            {/* 
                Rating in stars
                Title
                Review body
                */}

            <br></br>
            <TextField required variant="filled" helperText="Please enter your name" className='formInput' label="Name" value={name} onChange={(event) => setName(event.target.value)} inputProps={{ pattern: "^[A-Za-z]{1,40}$" }} />
            <br />
            <br />
            <TextField required variant="filled" helperText="Please enter your surname" className='formInput' label="Surname" value={surname} onChange={(event) => setSurname(event.target.value)} inputProps={{ pattern: "^[A-Za-z]{1,40}$" }} />
            <br />
        </form>
    </div>
    )
}

export default ReviewCook;