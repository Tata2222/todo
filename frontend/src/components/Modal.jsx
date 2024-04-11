const Modal = ({ children }) => {
  return (
    <div className='w-full'>
      <button className="btn m-auto" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button><dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">{children}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    </div>
  )
}

export default Modal;

