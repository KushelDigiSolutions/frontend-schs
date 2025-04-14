import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../../components/common/Head/head1";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function myprofile(pageProp) {



    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberprofile"} description={"this is member profile"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main2">
                <div className="event_main">
                <div className="membership-container">
      <div className="section-header">Membership Info</div>

      <div className="card-wrapper">
        <div className="info-section info-section1">
          <div className="info-header">Membership :</div>
          <div className="info-card">
            <p><strong>Membership Plan :</strong> Individual</p>
            <p><strong>Membership # :</strong> :</p>
          </div>
        </div>

        <div className="info-section info-section2">
          <div className="info-header">Mailing Information :</div>
          <div className="info-card">
            <p><strong>Send Mail To :</strong></p>
            <p><strong>Always Mail Pubs :</strong> No</p>
          </div>
        </div>

        <div className="info-section info-section3">
          <div className="info-header">Dues & Renewal :</div>
          <div className="info-card">
            <p><strong>Expiration Date :</strong> 2026 Feb 25 <span> | </span>  <strong>Amount Paid :</strong> 30.00</p>
            <p><strong>Donation :</strong> 0.00 <span> | </span> <strong>Date :</strong> 2025 Feb 26</p>
            <p><strong>Payment Type :</strong> Paypal <span> | </span> <strong>Comment :</strong> GWalker</p>
          </div>
        </div>
      </div>
    </div>
                </div>
            </div>


        </div>
    );
}

export async function getServerSideProps(context) {
    try {

        const globalSettings = await GlobalHeaderFooter();
        return {
            props: {
                page_content: false,
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            },
        };

    } catch (error) {

        return {
            props: {
                page_content: false,
                navbar: false,
                footer: false
            },
            notFound: true
        };

    }
}