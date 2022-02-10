import * as Styled from './Menu.styled.js';

export const Menu = (props) => {
    console.log(props);

    const test = {
        'item- test': 5,
        
    }

return (
    // 
        <Styled.MenuList isActive={props.isActive}>
            <li><a href="/">Team members</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">Documents</a></li>
            <li><a href="/">Timesheets</a></li>
        </Styled.MenuList>
   
)

}

