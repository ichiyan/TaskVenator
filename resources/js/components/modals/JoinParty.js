import React, { useEffect, useState } from 'react'
import Pagination from '../pagination/CustomPagination'
import { FontAwesomeIcon, axios } from '../../index'
import { partyListDummyData, partyMemberDummyData } from '../pagination/PartyListDummyData'
import SmallAvatar from './smallAvatar'
import '../../../../public/css/small_avatar.css'
import {
    faUsers,
    faChessKing,
    faChessKnight,
    faDiceD20,
    faClock
} from '@fortawesome/free-solid-svg-icons'
import { io } from 'socket.io-client'


const JoinPartyModal = ({socket, id}) => {

    const PAGE_SIZE = 6
    const [party_list, setPartyList] = useState([])
    const [rendered_list, setRenderedList] = useState([])
    let [selected_party, setSelectedParty] = useState({})
    const [page_num, setPageNum] = useState(1)

    const formatList = (list, page) => {
        let page_size = PAGE_SIZE
        let size_max = page_size * page
        let min = (page_size * page) - page_size
        let rendered = list.slice(min, size_max)
        return rendered
    }

    useEffect(() => {

        axios.get(`/api/show_parties`).then(res => {
            if(res.data.status == 200){
                console.log(res.data)
                let party_list = res.data.parties
                setPartyList(party_list)
                let list = formatList(party_list, page_num)
                setRenderedList(list)

                if (list.length <= 0) return
                setSelectedParty(party_list[0])

            }
        })
    }, [])

    const onPageChange = (page) => {
        setPageNum(page)
        let list = formatList(party_list, page)
        setRenderedList(list)
        setSelectedParty(list[0])
    }


    const sendJoinPartyRequest = (receiver_id) => {
        console.log("join party btn")
        console.log(socket)
        console.log(receiver_id)
        console.log(id)

        socket.emit("send_join_party_request", {
            sender_id: id,
            receiver_id: receiver_id,
        })

    }


    return (

        <div className="modal fade" id="join-a-party">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content internal-pages">
                    <div className="modal-header" style={{ borderBottom: "1px solid #2A2C37" }}>
                        <h5 className="modal-title text-white">Looking for a Party?</h5>
                    </div>
                    <div className="modal-body pt-0 pe-0 pb-0">
                        <div className="row justify-content-between mx-0">

                            {/* Party List */}
                            <div className="col-7 py-3">

                                {/* Search Bar */}
                                <div className="form-group">
                                    <input type="text" className="form-control" id="party-name" placeholder="Enter a party name..."></input>
                                </div>

                                <div className="table-responsive pt-4" style={{ minHeight: "500px" }}>
                                    <table className="table table-dark table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th><FontAwesomeIcon icon={faDiceD20} className="me-1" /> Party Name</th>
                                                <th>
                                                    <FontAwesomeIcon icon={faChessKing} className="me-1" /> Party Leader
                                                </th>
                                                <th>
                                                    <FontAwesomeIcon icon={faUsers} className="me-1" /> Members
                                                </th>
                                                <th>
                                                    <FontAwesomeIcon icon={faChessKnight} className="me-1" /> Win/Loss
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ cursor: "pointer" }}>
                                            {
                                                rendered_list.length <= 0 ?

                                                    <tr>
                                                        <td colSpan="4">
                                                            <div className='d-flex align-items-center justify-content-center' style={{ width: "100%", height: "450px" }}>
                                                                <i>No available party</i>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    : rendered_list.map((item) => {
                                                        return (
                                                            <tr key={item.id} onClick={() => { setSelectedParty(item) }}
                                                                className={item.id === selected_party?.id ? 'custom-border-left' : null}
                                                            >
                                                                <td>
                                                                    <img src={item.party_image} alt="guild-logo" className='guild-logo' width="30" height="30"/> {item.party_name}
                                                                </td>
                                                                <td valign='middle'>
                                                                    <p className='mb-0'>{item.founder_username}</p>
                                                                </td>
                                                                <td valign='middle'>
                                                                    <p className='mb-0'>{item.total_members}/{item.max_members}</p>
                                                                </td>
                                                                <td valign='middle'>
                                                                    <p className='mb-0'>{item.battles_won}/{item.battles_lost}</p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <Pagination
                                        className="pagination-bar justify-content-center"
                                        current_page={page_num}
                                        total_count={party_list.length}
                                        page_size={PAGE_SIZE}
                                        onPageChange={(page) => onPageChange(page)}
                                    />
                                </div>
                            </div>

                            {/* Party Details */}
                            <div className="col-5 px-4 bg-gradient">
                                {
                                    rendered_list.length <= 0 ?

                                        <img src="assets/images/avatar-mage.png" />

                                        : selected_party?.id &&
                                        <>
                                            <div className="">
                                                <h2 style={{ color: '#9580FF' }}>
                                                    <img src={selected_party.party_image} alt="guild-logo" className='selected-guild-logo' width="100" height="100" /> {selected_party.party_name}
                                                </h2>
                                            </div>
                                            <hr className='bg-secondary' />
                                            <div>
                                                <h4 className='text-white'><FontAwesomeIcon icon={faChessKing} className="me-1" /> {selected_party.founder_username}</h4>
                                                <p className='text-white'><FontAwesomeIcon icon={faClock} className="me-1" /> {selected_party.founded_on}</p>
                                            </div>
                                            <hr className='bg-secondary' />
                                            <div>
                                                <h4 className='text-white'>Party Motto</h4>
                                                <p className='text-white'>{selected_party.party_motto}</p>
                                            </div>
                                            <hr className='bg-secondary' />
                                            <div>
                                                <h4 className='text-white'>Party members</h4>
                                                <div>
                                                    <div>
                                                        <div className='d-flex flex-wrap' style={{ overflow: 'auto' }}>
                                                            {
                                                                selected_party.party_members.map((item, index) => {
                                                                    return (
                                                                        // u can implement a ReactToolTip
                                                                        <div key={index} title={item.username}>
                                                                            <SmallAvatar
                                                                                img_link={item.avatar_img_dir}
                                                                                current_index={index}
                                                                                total_members={selected_party.total_members}
                                                                            />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-2 pb-4 d-flex justify-content-end'>
                                                <button onClick={() => sendJoinPartyRequest(selected_party.founder)} type="button" className="btn-custom-primary join-form-party-btn">Join Party</button>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinPartyModal
