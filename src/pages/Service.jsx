import Subservice from "../Subservice";
import Servicelist from "../Servicelist";

const Service = () => {

    console.log(Servicelist);

    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner-title">
                        <h1>Service</h1>
                    </div>
                    <div className="banner-content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row gy-5">
                <div className="col-lg-4">
                    <div className="card" >
                        <img className="card-img-top" src="https://source.unsplash.com/random/400x250" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                {
                    Servicelist.map((cur,index) => {
                        const img_url = cur.filename+""+cur.type;

                        console.log(index+"--"+img_url);
                        return <Subservice key={index}
                            name={cur.title}
                            description={cur.description}
                            type={cur.type}
                            imgsrc={img_url}
                        />
                    })
                }
                
            </div>
        </div>
    </>
}

export default Service;