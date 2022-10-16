import React, { useState } from "react";
import "./FaqsStyles.scss";
import FAQDATA from "./FAQDATA";

const Faqs1 = () => {
  const [faqs, setFaqs] = useState([
    // {
    //   question: "How do i locate the hospital ? ",
    //   answer: "",
    //   open: true,
    // },

    // {
    //   question: "How can i contact my physician ? ",
    //   answer: "",
    // },

    {
      question: "If the goods were not satisfied, can the payment be returned back?",
      answer:
        "It depends on what caused the problem. If we have not made the goods as your requested size, color, techniques or confirmed design. We can re-make the goods, or returned the payment, or negotiate solutions such as give some discount, etc. Otherwise, we can’t responsible for the problem; but we can give you some discount for re-making the goods to reduce your losses.",
      open: false,
    },

    {
      question: "Can my items be customized?",
      answer: "  Yes, all items we provide are customized or branded to our clients’ requirement unless otherwise stated by our clients. i.e we provide items without logo when required by our clients. We believe your logo identity is an important part of your brand, you want it tell a story to your clients. That is what we do, Lans and creamy are logo and text imprint specialists. If it has a surface, it can be printed on effectively. We do it all for you. The vast variety of imprint options you can access with us includes but is far from limited to: embroidery, laser engraving, pad printing, silk printing, and screen printing.",
      open: false,
    },

    {
      question: " Do you have a minimum order size (MOQ)?",
      answer: "Yes. Certain items have minimum order while some do not have a minimum order size. This is because high orders are far less expensive and cost effective. Fill contact use form to learn more.",
      open: false,
    },
    // {
    //   question: "What is the mission & vision of Surgicare Consult Hospital ? ",
    //   answer: "",
    // },
    {
      question: "How exact are your products?",
      answer: " Since production requests can be made by phone or our mail system, we follow our clients’ exact description. As soon as the artwork has been confirmed, production starts immediately.",
      open: false,
    },

    {
      question: "How do I make payment?",
      answer: "We offer flexible and risk free payment options. Our clients can pay via bank deposit, paga, local transfer, bank Transfer or with debit cards via our P.O.S machine. Clients within Nigeria are allowed to pay at least 70% prior to production and the remaining 30% on delivery while clients from Benin, Togo, Ghana and other parts of Africa are required to pay to 70% prior to production and the remaining 30% before shipment. Clients outside Nigeria can make their payment through T/T, western Union, and Money Gram.For Account information you can find it on the CONTACT US  and ABOUT US  page ",
      open: false,
    },
    {
      question: "How do you deliver goods?",
      answer: "We use fright companies like: DHL /TNT/UPS/FEDEX/EMS, which is suitable for small quantity within 2 days for people in Nigeria and 1 week for people outside Nigeria. We also use registered transport companies service (This service is charged separately if not charged from the beginning of the transaction) ",
      open: false,
    },

    {
      question: "How long the goods can be arrived after i make payment? ",
      answer: "Sample lead time: 5-15 days, it’s depend on what kind of clothing label.Bulk lead time: 7-20 daysSample delivery time : 2-9 days by Fedex or DHL,to USA 1-2 days,  to UK 2-4 days,  to Canada and Australia 2-5 days.Bulk delivery time:  2-9days by Fedex or DHL 7-10days by air freight 30-40days by sea",
      open: false,
    },

    {
      question: "What’s the cost to make a sample?",
      answer: "Sample cost depends on what kind of the goods. ",
      open: false,
    },

    {
      question: "What kind of file format do you need for design?",
      answer: "We need vector graphic file but not bitmap file. Vector graphic file has to be PDF, AI, EPS, CDR, and the design must be still clear even after infinitely enlarge, not the phenomena of mosaic, or it is bitmap file, not vector graphic file.Bitmap is made of pixel, it will become serrated mosaic (not clear).The common bitmap file are JPG, PNG, GIF, BMP, TIF, PSD.If the artwork you send us is not the final design, please advise the font name for helping revise it for you. And also advise the Pantone No. of the colors to make sure the color is exactly what you want.",
      open: false,
    },

    // {
    //   question: "Does Surgicare Consult Hospital hire part-time personnel ?",
    //   answer: "Yes",
    //   open: false,
    // },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <move>
      <section className="faq-section">
        <h1 className="h1_faq">Frequently Asked Questions</h1>
        <div className="faq-container">
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FAQDATA faq={faq} index={i} toggleFAQ={toggleFAQ}/>
            ))}
          </div>
        </div>
      </section>
    </move>
  );
};

export default Faqs1;
