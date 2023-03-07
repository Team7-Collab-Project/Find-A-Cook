

function ReviewCook() {

    const handleSubmission = () => {

    };
    return(
    <div >
        <form id="documentform" onSubmit={handleSubmission}>
            <div><h1>Review A Cook</h1></div>
            <br></br>
            <div class="form-container">
                        <form>
                            <div class="form-group form-fg">
                                <input type="rating" name="rating" class="input-text" placeholder="Rating" />
                            </div>
                            <div class="form-group form-fg">
                                <input type="review-title" name="review-title" class="input-text" placeholder="Review Title" />
                            </div>
                            <div class="form-group form-fg">
                                <input type="review-body" name="review-body" class="input-text" placeholder="Review Body" />
                            </div>
                            <div class="form-group mt-2">
                                <button type="submit" class="btn-md btn-fg btn-block">Submit Review</button>
                            </div>
                        </form>
                    </div>
        </form>
    </div>
    )
}

export default ReviewCook;