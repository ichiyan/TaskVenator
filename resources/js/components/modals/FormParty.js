import '../../../../public/css/form_party.css'
import { useState, useRef, FontAwesomeIcon, axios } from '../../index'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'

const FormParty = () => {

    const default_guild_logo_dir = '/assets/images/party_images/party_image_placeholder.png'
    const [partyImage, setPartyImage] = useState()
    const [partyImagePreview, setPartyImagePreview] = useState(default_guild_logo_dir)
    const [partyInfo, setPartyInfo ] = useState({})
    const isPartyImagePlaceholder = useRef(1)

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

    const inputHandler = (e) => {

        //if max number, handleNumberOfPartyMembers

        setPartyInfo({
            ...partyInfo, [e.target.name]: e.target.value
        })
    }

    const readURL = (input) => {
        console.log(input)
        var files = input.target.files
        if (files && files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                setPartyImagePreview(e.target.result)
            };
            reader.readAsDataURL(files[0]);
            setPartyImage(files[0]);
            isPartyImagePlaceholder.current = 0;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const partyFormData = new FormData()
        partyFormData.append("party_name", partyInfo.party_name)
        partyFormData.append("max_members", partyInfo.max_members)
        partyFormData.append("party_motto", partyInfo.party_motto)
        partyFormData.append("party_image", partyImage)
        partyFormData.append("is_party_image_placeholder", isPartyImagePlaceholder.current)

        console.log(partyFormData.values())

        axios.post(`/api/create_party`, partyFormData).then(res => {
            if(res.data.status == 200){
                console.log(res.data.message)
            }
        })

    }



    return (
        <div className="modal fade" id="form-a-party">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content internal-pages">
                    <div className="modal-header" style={{ borderBottom: "1px solid #2A2C37" }}>
                        <h5 className="modal-title text-white">Want to start a Party?</h5>
                    </div>
                    <div className="modal-body bg-gradient">
                        <form onSubmit={submitHandler} encType="multipart/form-data">
                            <div className="form-group">
                                <div className="mb-3">
                                    <div className="d-flex justify-content-center">
                                        <div className="position-relative">
                                            <img id='imagePreview' src={partyImagePreview} className="border p-1 border-info rounded-circle bg-none p-0" height="150" width="150" style={{ minHeight: "100px", minWidth: "100px" }} />
                                            <div className='upload-image-inner-container'>
                                                <input id='upload' className='inputfile' type="file" name="pic" accept="image/*" onChange={readURL} style={{ cursor: "pointer" }} />
                                                <label>
                                                    <FontAwesomeIcon icon={faPenNib} height="30" width="30" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="party-name" className="form-label text-white">Party Name <span className='text-danger'>*</span></label>
                                    <input onChange={inputHandler} name="party_name" type="text" className="form-control" id="party-name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="party-max-members" className="form-label text-white">Number of Members (max: {max_party_number}) <span className='text-danger'>*</span></label>
                                    <input onChange={inputHandler} name="max_members" type="number" className="form-control" id="party-max-members" min="1" max={max_party_number} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="party-motto" className="form-label text-white">Party Motto</label>
                                    <textarea onChange={inputHandler} name="party_motto" className="form-control" id="party-motto" rows="3" style={{resize: "none"}}></textarea>
                                </div>
                                <div className='pt-2 pb-4 d-flex justify-content-end'>
                                    <button type="submit" className="btn-custom-primary join-form-party-btn">Create Party</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormParty
