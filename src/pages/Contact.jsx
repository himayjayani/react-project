import { useState } from "react";

const Contact = () => {

    const [newval,updateval] = useState({
        FullName:'',
        Email:'',
        Phone:''
    });

    const inputChnage = (props) => {
        console.log(props.target.name);

        console.log(props.target.value);

        const {name,value} = props.target;

        updateval((olddata) => {
            return {
                ...olddata,
                [name] : value
            }

        })

    }
    console.log(newval);

    const formSubmit = (event) => {
        console.log(event);
        console.log("submit event");
        event.preventDefault();
    }

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
            <div className="row mt-5">

                <form onSubmit={ formSubmit} >
                    <div className="form-row row mb-3">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Full Name</label>
                            <input type="text" className="form-control" name="FullName" value={newval.FullName} onChange={inputChnage} placeholder="Full Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" name="Email" value={newval.Email} onChange={inputChnage} placeholder="Email" />
                        </div>
                      
                    </div>
                    <div className="form-group mb-3">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Phone</label>
                            <input type="text" className="form-control" name="Phone" onChange={inputChnage} placeholder="Phone number" />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-row mb-3 row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <input type="text" className="form-control" id="inputState" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
}

export default Contact;