import '../../../../public/css/form_party.css'
import { FontAwesomeIcon } from '../../index'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'

const FormParty = () => {

    const default_guild_logo_dir = '/assets/images/velvet.png'
    const max_party_number = 9
    const handleNumberOfPartyMembers = (e) => {

        if (e.target.value > max_party_number) {
            e.target.value = max_party_number
            return
        }

        if (e.target.value < 1 && e.target.value != '') {
            e.target.value = 1
            return
        }

    }

    return (
        <div className="modal fade" id="form-a-party">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content internal-pages">
                    <div className="modal-header" style={{ borderBottom: "1px solid #2A2C37" }}>
                        <h5 className="modal-title text-white">Want to start a Party?</h5>
                    </div>
                    <div className="modal-body bg-gradient">
                        <div className="form-group">
                            <div className="mb-3">
                                <div className="d-flex justify-content-center">
                                    <div className="position-relative">
                                        <img src={default_guild_logo_dir} className="border p-1 border-info rounded-circle bg-none p-0" height="150" width="150" style={{ minHeight: "100px", minWidth: "100px" }} />
                                        <div className='upload-image-inner-container'>
                                            <input className='inputfile' type="file" name="pic" accept="image/*" style={{ cursor: "pointer" }} />
                                            <label>
                                                <FontAwesomeIcon icon={faPenNib} height="30" width="30" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="party-name" className="form-label text-white">Party Name <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control" id="party-name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="party-max-members" className="form-label text-white">Number of Members (max: {max_party_number}) <span className='text-danger'>*</span></label>
                                <input type="number" className="form-control" id="party-max-members" min="1" max={max_party_number} onChange={handleNumberOfPartyMembers} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="party-motto" className="form-label text-white">Party Motto</label>
                                <textarea className="form-control" id="party-motto" rows="3" style={{resize: "none"}}></textarea>
                            </div>
                            <div className='pt-2 pb-4 d-flex justify-content-end'>
                                <button type="button" className="btn btn-success">CREATE PARTY</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormParty