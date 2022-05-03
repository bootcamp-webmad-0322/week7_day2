const SimpleList = () => {

    const drinks = ['Agua', 'Cacaolat', 'Cervemocho', 'Jagger', 'Agua']

    return (
        <section className="list">

            <h2>Listado simple</h2>

            {
                drinks.map((elm, idx) => {
                    return <p key={idx}>{elm}</p>
                })
            }

        </section>
    )
}

export default SimpleList