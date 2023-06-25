import style from "../../bootstrap.min.css"

export default function ButtonsProfile(props) {
    return (
        <>
            <a {...props} href={props.href} target="_blank"><button className="m-0 m-auto my-4 h-25 text-white rounded-4 w-50" style={{ width: "28%", display: "block", backgroundColor: "rgb(108, 108, 201)", border: "none" }} type="button">{props.children}</button></a>
        </>
    )
}