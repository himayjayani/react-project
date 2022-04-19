
const Subservice = (props) => {
    return <>
          <div className="col-lg-4">
                    <div className="card" >
                        <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title"> {props.name} </h5>
                            <span>{ props.type}</span>
                            <p class="card-text">{props.description} </p>
                        </div>
                    </div>
                </div>
    </>
}

export default Subservice;