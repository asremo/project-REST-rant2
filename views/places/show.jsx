const React = require('react')
const Def = require('../default')

// displays all the info you have about the place
function show (data) {
    return(
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <br />
                        <img src={data.place.pic} alt={data.place.name} />
                        <h2>
                            Located in {data.place.city}, {data.place.state}
                        </h2>
                    </div>
                    <div className='col-sm-6'>
                        <br />
                        <h1>
                            {data.place.name}
                        </h1>
                        <h2 class="color">
                            Rating
                        </h2>
                        <h3>
                            Not rated
                        </h3>
                        <br />
                        <h2 class="color">
                            Description
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <br />
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        {/* method is the HTTP verb and action is the destination path */}
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                            <button type="submit" className='btn btn-danger'>
                            Delete
                            </button>
                        </form>
                    </div>
                </div>
                <hr />
                <div>
                    <h2 class="color">
                        Comments
                    </h2>
                    <h3>
                        No comments yet!
                    </h3>
                    <br />
                </div>
            </main>
        </Def>
    )
}

module.exports = show