
function JoinWBCAMTI(){
    const image = "url('https://minf-minf.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2024-02-16+at+7.28.32+PM+(1).jpeg')";
    return(

        <section>
            <div
            className="mt-[-60px] mx-5 mb-12 rounded-lg "
            style={{backgroundImage: image, backgroundSize: "cover", backgroundPosition: "center"}}
            >
                <div className="flex h-[20vh] md:h-[40vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]" >
                    <p className="px-8 md:text-6xl text-5xl md:text-6xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                    JOIN US 
                    </p>
                </div>
            </div>
        
            <div className="container mx-auto w-[80%] md:w-[70%]">
                <form class="w-full">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Jane"/>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-last-name" type="text" placeholder="Doe"/>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" for="mobile">
                                Mobile
                            </label>
                            <input class="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none "
                                id="mobile" type="tel" placeholder="Enter your mobile number"
                                pattern="[0-9]{10}" title="mobile number"/>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" for="email">
                                Email
                            </label>
                            <input class="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none " id="email" type="email" placeholder="Enter your email address"/>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-city" type="text" placeholder="Albuquerque"/>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-state" >   
                            <option disabled selected value="">Select a State/Union Territory</option>
                            <option>Andaman and Nicobar Islands</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chandigarh</option>
                            <option>Chhattisgarh</option>
                            <option>Dadra and Nagar Haveli and Daman and Diu</option>
                            <option>Delhi</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jammu and Kashmir</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Ladakh</option>
                            <option>Lakshadweep</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Puducherry</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input class="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-zip" type="text" placeholder="90210"/>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default JoinWBCAMTI;