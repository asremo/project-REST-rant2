const React = require('react')
const Def = require('../default')

// displays all the info you have about the place
function show (data) {
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <h2>Rating</h2>
                <h4>Currently unrated</h4>
                <h2>Comments</h2>
                <h4>No comments yet!</h4>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                {/* method is the HTTP verb and action is the destination path */}
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show