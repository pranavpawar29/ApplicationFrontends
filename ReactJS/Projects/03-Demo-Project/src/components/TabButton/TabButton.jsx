
export default function TabButton({children, isSelected, ...props}) {
    return <li><button className={isSelected ? "active" : undefined} {...props}>{children}</button></li>
}


// export default function TabButton(props) {
//     return <li><button onClick={props.onClick}>{props.children}</button></li>
// }