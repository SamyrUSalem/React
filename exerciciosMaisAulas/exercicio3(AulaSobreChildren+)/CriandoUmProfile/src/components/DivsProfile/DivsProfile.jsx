import style from "../../bootstrap.min.css"

export default function DivsProfile(props) {
    return (
        <>
            {/*Esse "{...props} é usado para coletar todas as props(atributos) que estão no compornente pai, nesse caso esta sendo coletado o id="test", mas poderia ter mais atributos como o data, arial, class, etc... */}
            <div {...props} className="col-12" style={{ borderBottom: "1px solid white" }}>
                <p className="text-white m-0 m-auto py-2">{props.children}</p>
            </div>
        </>
    )
}