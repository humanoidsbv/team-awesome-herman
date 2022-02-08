import * as Styled from './Menu.styled.js';

export const Menu = () => {
return (
    <Styled.Menu>
        <Styled.MenuList>
            <li><a href="/">Team members</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">Documents</a></li>
            <li><a href="/">Timesheets</a></li>
        </Styled.MenuList>
    </Styled.Menu>
)

}