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



export default function memberlist(pageProp) {

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="scch-table-container">
                        <table className="scch-member-table">
                            <colgroup>
                                <col style={{ width: "25%" }} />
                                <col style={{ width: "30%" }} />
                                <col style={{ width: "45%" }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Member Name</th>
                                    <th>Address</th>
                                    <th>Telephone / Email / Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1st Mo St Capitol, State Historic Site</td>
                                    <td />
                                    <td>sue.love@dnr.mo.gov</td>
                                </tr>
                                <tr>
                                    <td>Achelpohl, John</td>
                                    <td>1118 Perry St. Saint. Charles, MO 63301-2904</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td>Ackmann, Mark</td>
                                    <td />
                                    <td />
                                </tr>
                                <tr>
                                    <td>Adams, Amanda</td>
                                    <td />
                                    <td>adamsamanda1@hotmail.com</td>
                                </tr>
                                <tr>
                                    <td>Adams, Kathy</td>
                                    <td>1330 Jonathans Trl Vero Beach, FL 32963-2367</td>
                                    <td>adamsiumd@bellsouth.net</td>
                                </tr>
                                <tr>
                                    <td>Adams, Rick</td>
                                    <td />
                                    <td>rrrussell@centurytel.net</td>
                                </tr>
                                <tr>
                                    <td>Adams, William T.</td>
                                    <td />
                                    <td>adams_terry@att.net</td>
                                </tr>
                                <tr>
                                    <td>Adamson, Steve &amp; Carolyn</td>
                                    <td>1253 Warren St. Placentia, CA 92870-3640</td>
                                    <td>
                                        (714) 996-9511
                                        <br />
                                        cjwadamson@gmail.com
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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