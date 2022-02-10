const Button = (props) => {

    const myClass = `button ${props.type}`
    return(
    <button className={myClass} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;