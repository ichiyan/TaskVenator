import React from 'react'
import classnames from 'classnames'
import { usePagination, DOTS } from '../pagination/usePagination'
import '../../../../public/css/pagination.css'
import { FontAwesomeIcon } from '../../index'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = (props) => {
    const {
        onPageChange,
        total_count,
        sibling_count = 1,
        current_page,
        page_size,
        className
    } = props

    const pagination_range = usePagination({
        current_page,
        total_count,
        page_size
    })

    // hide pagination if range is less than 2
    if (current_page === 0 || pagination_range.length < 2)
        return null

    const onNext = () => {
        onPageChange(current_page + 1)
    }

    const onPrevious = () => {
        onPageChange(current_page - 1)
    }

    let last_page = pagination_range[pagination_range.length - 1]

    return (
        <ul
            className={classnames('pagination-container', { [className]: className })}
        >
            {/* Left navigation arrow */}
            <li
                className={classnames('pagination-item', {
                    disabled: current_page === 1
                })}
                onClick={onPrevious}
            >
                <FontAwesomeIcon icon={faAngleDoubleLeft}/>
            </li>
            {pagination_range.map((page_number, index) => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (page_number === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <li
                        key={index}
                        className={classnames('pagination-item', {
                            selected: page_number === current_page
                        })}
                        onClick={() => onPageChange(page_number)}
                    >
                        {page_number}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={classnames('pagination-item', {
                    disabled: current_page === last_page
                })}
                onClick={onNext}
            >
                <FontAwesomeIcon icon={faAngleDoubleRight}/>
            </li>
        </ul>
    )
}

export default Pagination