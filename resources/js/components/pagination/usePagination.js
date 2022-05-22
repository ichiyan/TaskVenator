import { useMemo } from "react"

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1
    return Array.from({ length }, (_, index) => index + start)
}

export const usePagination = ({ total_count, page_size, current_page }) => {

    const pagination_range = useMemo(() => {

        const total_page_count = Math.ceil(total_count / page_size),
              sibling_count = 1


        const total_page_numbers = sibling_count + 5
        /** 
         *      if the number of pages is less than the page numbers we want
         *      to show in the pagination component, we return 
         *      the range [1 ... total_page_count] 
         */
        if (total_page_numbers >= total_page_count)
            return range(1, total_page_count)

        const left_sibling_index = Math.max(current_page - sibling_count, 1),
              right_sibling_index = Math.min(current_page + sibling_count, total_page_count)

        /**
         *      we do not show dots when there is just 1 page number
         *      between the 
         *              leftmost + rightmost siblings, and 
         *              the page limit
         *      For example, [1, total_page_count]  
         */
        const should_show_left_dots = left_sibling_index > 2,
              should_show_right_dots = right_sibling_index < total_page_count - 2

        const first_page_index = 1,
              last_page_index = total_page_count

        ////////////////////////////////////////////////////////////////////////////

        if (!should_show_left_dots && should_show_right_dots) {
            let left_item_count = 3 + 2 * sibling_count,
                left_range = range(1, left_item_count)

            return [...left_range, DOTS, total_page_count]
        }

        if (should_show_left_dots && !should_show_right_dots) {
            let right_item_count = 3 + 2 * sibling_count,
                right_range = range(total_page_count - right_item_count - 1, total_page_count)
            
            return [first_page_index, DOTS, ...right_range]
        }

        if (should_show_left_dots && should_show_right_dots) {
            let middle_range = range(left_sibling_index, right_sibling_index)

            return [first_page_index, DOTS, ...middle_range, DOTS, last_page_index]
        }
         
     }, [ total_count, page_size, current_page ])

     return pagination_range
}