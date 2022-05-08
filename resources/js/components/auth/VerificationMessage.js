import { React, useState, useEffect, Link, axios } from "../../index"
import { useLocation } from "react-router-dom"

// it's up to u what to do with this page
// u can  hide/disable this if this route is accessed outside
// the provided link found in an email
const VerificationMessage = () => {

    const location = useLocation()
    const [wrapper, setWrapper] = useState({
        classNames: '',
        message: ''
    })

    useEffect(() => {
        const param = location.search
        const arg = new URLSearchParams(param).get('token')

        axios.post('/api/auth', { token: arg })
            .then(res => {

                let classNames  = 'bg-success text-white p-2',
                    message     = 'Verification successful.'
                if (res.data.status !== 200) {
                    classNames = 'bg-danger text-white p-2'
                    message = res.data.validation_errors
                }

                setWrapper({ classNames, message })
            })
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center vh-100 mt-5">
                <div className="col-md-8 w-50">
                    <div className="card">
                        <div className="card-header">Verification Status</div>
                        <div className="card-body">
                            {
                                <div className={wrapper['classNames']}>
                                    <p className="mb-0">{wrapper['message']}</p>
                                </div>
                            }
                            <Link to="/login" className="mt-4 submit-link submit">Go back to Log In page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationMessage