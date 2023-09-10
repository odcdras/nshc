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

export function Invoice() {
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
                            
                            {/* <!--  form --> */}
                            <div className="contacts12-main col-xs-12 mt-lg-0 mt-5">
                                <form
                                    //onSubmit = {this.handleSubmit}
                                    className="main-input"
                                >
                                    <div className="top-inputs d-grid" id='input-cont'>
                                        <input
                                            //onChange={this.handleChange}
                                            type="text"
                                            placeholder="Enter Part Name"
                                            name="name"
                                            id="w3lName"
                                            required=""
                                            //value={this.state.activeItem.name}
                                        />
                                        <input
                                            //onChange={this.handleChange}
                                            type="date"
                                            placeholder="Date"
                                            name="name"
                                            id="w3lName"
                                            required=""
                                            //value={this.state.activeItem.name}
                                        />

                                        <input
                                            //onChange={this.handleChange}
                                            type="text"
                                            name="Enter "
                                            placeholder="Enter Quantity"
                                            id="w3lSender"
                                            required=""
                                            //value={this.state.activeItem.email}
                                        />
                                        <input
                                            //onChange={this.handleChange}
                                            type="text"
                                            placeholder="Enter Rate"
                                            name="phoneno"
                                            id="w3lName"
                                            required=""
                                            //value={this.state.activeItem.phoneno}
                                        />
                                        <input
                                            //onChange={this.handleChange}
                                            type="text"
                                            placeholder="Enter Total"
                                            name="amount"
                                            id="w3lName"
                                            required=""
                                            //value={this.state.activeItem.phoneno}
                                        />
                                    </div>
                                    
                                                                        
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

              </section>
              <div className="text-right">
                <button className="btn btn-theme5" onClick={addInput}>+Add input </button>                
            </div>              
            <div className="text-center">
                <button
                    type="submit"
                    className="btn btn-theme2"
                >
                    Submit Now
                </button>
            </div>             
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

export default Invoice;
