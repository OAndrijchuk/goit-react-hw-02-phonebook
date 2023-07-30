export const Filter = ({onCheangedFilter,filterValue}) => {
    return (
        <>
            <h2>Find contacts by name</h2>
            <input
                type="text"
                name="filter"
                onChange={onCheangedFilter}
                value={filterValue}
            />
        </>
    )
}