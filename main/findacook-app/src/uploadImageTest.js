import Button from '@mui/material/Button';
import Input from '@mui/material/Input';




const Posts = () => {
    return (
        <>

            <Input id="imageInput" type="file" hidden /*onChange={handleUpload}*/ />
            <Button
                as="label"
                htmlFor="imageInput"
                colorScheme="blue"
                variant="outline"
                mb={4}
                cursor="pointer"
                //isLoading={uploading}
            >
                Upload
            </Button>
            {/* {error && <ErrorText>{error}</ErrorText>}
            {uploadError && <ErrorText>{uploadError}</ErrorText>} */}

        </>
    );

};

export default Posts;
