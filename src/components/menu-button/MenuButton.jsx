import * as Styled from './MenuButton.styled.js';
import HamburgerIcon from '../../../public/assets/icons/Hamburger.svg';
import CloseIcon from '../../../public/assets/icons/Close.svg'

export const MenuButton = (props) => {

const icon = props.isActive ? <CloseIcon /> : <HamburgerIcon />

return (
    <Styled.MenuButton onClick={props.onClick}>
        
        {icon}
        
    </Styled.MenuButton>
)

}
