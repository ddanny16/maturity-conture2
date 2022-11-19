import { React, useRef } from "react";
import "./Buy.scss"
import emailjs from '@emailjs/browser';


const Buy = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f0sum4n', 'template_7h21qj4', form.current, 'nXv22qjACTxRpoQke')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section className="section4" id="consultation">
            <main>
                <h3 className="h3_h3">Buy An Item</h3>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="name1">Name</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name1"
                                id="name1"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="email1">Email</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email1"
                                id="email1"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="date1">Date</label>
                        </div>
                        <div className="input-group">
                            <input type="date" name="date1" id="date1" required />
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <label htmlFor="gender1">Gender</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="gender1"
                                id="gender1"
                                placeholder="Enter your gender e.g male"
                                required
                            />
                        </div>
                    </div>


                    <div class="form-group">
                        <div>
                            <label htmlFor="prods">Products</label>
                        </div>
                        <div className="input-group">
                            <select name="prods" id="prods" size="1">
                                <option value="acrylic">Acrylic Button Badge</option>
                                <option value="beach">Beach Umbrella</option>
                                <option value="beret">Beret</option>
                                <option value="button">Buttons</option>
                                <option value="car_air_fresheners">Car Air Fresheners</option>
                                <option value="car_sunshades">Car Side Sunshades</option>
                                <option value="cardigan">Cardigans</option>
                                <option value="cufflinks">Cufflinks</option>
                                <option value="cup_mugs">Cup-Mugs</option>
                                <option value="facecap">Face-Caps</option>
                                <option value="flags">Flags</option>
                                <option value="flashdrives">Flashdrives</option>
                                <option value="gflsgs">GiantFlags</option>
                                <option value="inflatables">Inflatables</option>
                                <option value="keychains">KeyChains</option>
                                <option value="Lanyards">Lanyards</option>
                                <option value="lpins">Label & Pins</option>
                                <option value="mousepads">Mouse Pads</option>
                                <option value="nonwovenshoppingbags">Non Woven Shopping Bags</option>
                                <option value="memostickers">Note Pad-Memo Sticker</option>
                                <option value="memostickers">Note Pad-Memo Sticker</option>
                                <option value="paperbags">Paper Bags</option>
                                <option value="pen">Pens</option>
                                <option value="businsesscards">PVC Business Card</option>
                                <option value="fridgemagsX"> Fridge Magnets</option>
                                <option value="handfans"> Hand Fans</option>
                                <option value="clothmath"> Table Clothe Mart</option>
                                <option value="soccerball"> Soccer Ball</option>
                                <option value="rollupban"> Rollup Banner</option>
                                <option value="scarfnmuffler"> Scarf & Muffler</option>
                                <option value="sock"> Socks</option>
                                <option value="sportwear"> Sports Wear</option>
                                <option value="tableclock"> Table Clock</option>
                                <option value="tieholder"> Tie Holder</option>
                                <option value="ties"> Ties</option>
                                <option value="tintray"> Tin Tray</option>
                                <option value="torches"> Torches</option>
                                <option value="towels"> Towels</option>
                                <option value="t-shirt"> T-shirt</option>
                                <option value="umbrella">Umbrella</option>
                                <option value="wallclock">Wall Clock</option>
                                <option value="water_flooding_flag">Water Flooding Flag</option>
                                <option value="waterbottle">Water Bottle</option>
                                <option value="wovenlsnts">Woven Labels & Tags</option>
                                <option value="wristbands">Wristbands</option>


                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <label htmlFor="textarr">Product Description</label>
                        </div>
                        <div className="input-group">
                            <textarea name="textarr" id="textarr" cols="30" rows="1" placeholder="Input your products description"></textarea>
                        </div>
                    </div>







                    <div className="btn-submit">

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </main>
        </section>
    );
};

export default Buy
