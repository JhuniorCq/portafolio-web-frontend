import './Technology.css'
import { Tooltip } from 'react-tooltip'

export const Technology = ({ image, name }) => {
    return (
        <>
            <li className='technology' data-tip data-tooltip-id={name} >
                <img src={image} alt={name} />
            </li>

            <Tooltip id={name} place='bottom' >
                {name}
            </Tooltip>
        </>
    )
}