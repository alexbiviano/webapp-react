const ReviewForm = () => {
  return (
    <div className='col-12'>
      <div className="card">

        <div className="card-header">
          <h3>Leave a review</h3>
        </div>

        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-12">
                <label htmlFor="name" className='control-label'>Name</label>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  id='name'
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="vote" className='control-label'>Vote</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  className='form-control'
                  placeholder='Vote'
                  name='vote'
                  id='vote'
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="text" className='control-label'>Text</label>
                <textarea
                  type="text"
                  className='form-control'
                  placeholder="Write something"
                  name='text'
                  id='text'
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button
                  className='btn btn-outline-success'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm