import { React, useRef } from "react";
import "./Buy.scss"
import emailjs from '@emailjs/browser';


const Buy = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_78k9ero', 'template_ej61jzd', form.current, 'nXv22qjACTxRpoQke')
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
                <h3>Buy An Item</h3>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="input-group">
                            <input type="date" name="date" id="date" required />
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <label htmlFor="gender">Gender</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="gender"
                                id="gender"
                                placeholder="Enter your gender e.g male"
                                required
                            />
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
