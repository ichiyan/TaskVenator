import '../../../../public/css/small_avatar.css'

const SmallAvatar = ({ img_link, current_index, total_members }) => {

    const max_member_to_display = 7
    if (current_index <= max_member_to_display) {
        return (
            <div className='me-2 mb-2'>
                <img src={img_link} alt="Avatar" className='avatar-circle' />
            </div>
        )
    }

    if (current_index === total_members - 1) {
        return (
            <span className="b-avatar bg-secondary rounded-circle me-2 mb-2" style={{ width: "50px", height: "50px" }}>
                <span className="b-avatar-text" style={{ fontSize: "calc(16px)" }}>
                    <span>{total_members - max_member_to_display - 1}+</span>
                </span>
                <span className="b-avatar-badge badge-primary" style={{ fontSize: "calc(11.2px)", bottom: "0px", right: "0px" }}>
                </span>
            </span>
        )
    }

    return null
}

export default SmallAvatar