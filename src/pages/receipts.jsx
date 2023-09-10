import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";



// Call addInput() function on button click
function addInput(){
  const container = document.getElementById("input-cont");
  //#let input = document.createElement('input');
  //#input.placeholder = "Type something";
  //#container.appendChild(input);
  console.log("input created");
  var listItem = document.createElement("li");
  var documentFragment = document.createRange().createContextualFragment(`
      <input type="text" placeholder="Enter Part Name">
      <input type="date" placeholder="Date">
      <input type="text" placeholder="Enter Quantity">
      <input type="text" placeholder="Enter Rate">
      <input type="text" placeholder="Enter Total">
      `)
  //debugger
  //listItem.appendChild(documentFragment)
  container.appendChild(documentFragment);
}

export function Receipts() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <section className="w3l-contacts-12" id="contact">
              <div className="contact-top pt-5">
                    <div className="container py-xs-5">
                        <div className="row cont-main-top">
                          {/* <!-- contact form --> */}
                          <div className="contacts12-main col-lg-8 mt-lg-0 mt-5">
                                <form
                                    //onSubmit = {this.handleSubmit}
                                    className="main-input"
                                >

                                    <div className="top-inputs d-grid">
                                        <p> Date </p>
                                        <input
                                            //onChange={this.handleChange}
                                            type="date"
                                            placeholder="Date"
                                            name="name"
                                            id="w3lName"
                                            required=""
                                            //value={this.state.activeItem.name}
                                        />
                                        
                                    </div>
                                    <div className="top-inputs d-grid">
                                        <p> Patient Name </p>
                                        <input
                                            //onChange={this.handleChange}
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            id="w3lName"
                                            required=""
                                            //value={this.state.activeItem.name}
                                        />                                        
                                    </div>
                                    <div className="top-inputs d-grid">
                                        <p> Patient Email </p>
                                        <input
                                            //onChange={this.handleChange}
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            id="w3lSender"
                                            required=""
                                            //value={this.state.activeItem.email}
                                        />
                                    </div>
                                    <div className="top-inputs d-grid">
                                        <p> Patient Phone Number </p>
                                        <input
                                        //onChange={this.handleChange}
                                        type="text"
                                        placeholder="Phone Number"
                                        name="phoneno"
                                        id="w3lName"
                                        required=""
                                        //value={this.state.activeItem.phoneno}
                                    />
                                    </div>
                                    <div className="top-inputs d-grid">
                                        <p> Amount </p>
                                        <input
                                        //onChange={this.handleChange}
                                        type="text"
                                        placeholder="Amount"
                                        name="amount"
                                        id="w3lName"
                                        required=""
                                        //value={this.state.activeItem.phoneno}
                                    />
                                    </div>
                                    <div className="top-inputs d-grid">
                                        <p> Mode of Payment </p>
                                        <input
                                        //onChange={this.handleChange}
                                        list="browsers"
                                        placeholder="select mode of payment"
                                        name="amount"
                                        id="w3lName"
                                        required=""
                                        //value={this.state.activeItem.phoneno}
                                        />
                                        <datalist id="browsers">
                                            <option value="Cash"/>
                                            <option value="Cheque/DD"/>
                                            <option value="UPI"/>
                                        </datalist>

                                    </div>
                                    <div className="top-inputs d-grid">
                                        <p> </p>
                                        <input
                                        //onChange={this.handleChange}
                                        type="text"
                                        placeholder="Drawn on"
                                        name="Drawn"
                                        id="w3lName"
                                        required=""
                                        //value={this.state.activeItem.phoneno}
                                    />
                                    </div>
                                    
                                    <textarea
                                        // onChange={this.handleChange}
                                        placeholder="Doctor write patient summary here"
                                        name="message"
                                        id="w3lMessage"
                                        required=""
                                        //value={this.state.activeItem.message}
                                    ></textarea>
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="btn btn-theme2"
                                        >
                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

              </section>
                            
                         
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Receipts;
