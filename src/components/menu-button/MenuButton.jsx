import * as Styled from './MenuButton.styled.js';
import HamburgerIcon from '../../../assets/icons/Hamburger.svg';

export const MenuButton = (props) => {


return (
    <Styled.MenuButton>
        
        <HamburgerIcon onClick={props.onClick}/>
        
    </Styled.MenuButton>
)

}