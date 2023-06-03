import Style from "./Card.module.css"
export const Card = ( {Lote, producto} ) => {
    return (
        <>
            <div className={Style.caja}>
                <h1 className={Style.titulo}>Producto:{producto} </h1>
                <p>Lote: {Lote} </p>
            </div>
        </>
    )
}