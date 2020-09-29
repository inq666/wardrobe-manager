import React, { useState } from 'react';
import './_modal-window.scss';


type ModalWindowPropsType = {
  onShowModal(): void,
  title: string
}
const ModalWindow: React.FC<ModalWindowPropsType> = (props) => {
  const [title, setTitle] = useState<string>(props.title);
  const [validTitle, setValidTitle] = useState<boolean>(true)

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    event.target.value ? setValidTitle(true) : setValidTitle(false);
  }

  const closeModalWindow = () => {
    props.onShowModal();
  }

  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog   w-50 mw-100" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span onClick={closeModalWindow} aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Title</span>
              </div>
              <input onChange={changeInputHandler} type="text" className={`form-control ${validTitle ? 'is-valid' : 'is-invalid'}`} placeholder="Enter title" value={title} required />
              <span className="invalid-tooltip">Title cannot be empty!</span>
            </div>

            <form className="was-validated">
              <div className="form-group">
                <select className="custom-select" required>
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="invalid-feedback">Choose a category</div>
              </div>
            </form>

            <span className="input-group-text mb-2">Filter</span>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Spring</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" />
              <label className="custom-control-label" htmlFor="customCheck2">Summer</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck3" />
              <label className="custom-control-label" htmlFor="customCheck3">Autumn/Fall</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck4" />
              <label className="custom-control-label" htmlFor="customCheck4">Winter</label>
            </div>

            <div className="custom-file mt-4">
              <input type="file" className="custom-file-input" />
              <label className="custom-file-label" htmlFor="inputGroupFile04">Choose a new file</label>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeModalWindow}>Close</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ModalWindow;
