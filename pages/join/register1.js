import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../../components/common/Head/head1";
import Link from "next/link";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const plans = [
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
];



// const itemsPerPage = 10;
export default function register1(pageProp) {

    // const [currentPage, setCurrentPage] = useState(1);

    // const totalPages = Math.ceil(records.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const currentItems = records.slice(startIndex, startIndex + itemsPerPage);

    // const handleClick = (page) => {
    //     if (page >= 1 && page <= totalPages) {
    //         setCurrentPage(page);
    //     }
    // };

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="scchs-wrapper">
                        {/* Section: New Membership */}
                        <div className="scchs-new-membership">
                            <h2 className="scchs-title">New Membership</h2>
                            <p className="scchs-non-refundable">
                                ANNUAL MEMBERSHIP DUES ARE NOT REFUNDABLE
                            </p>
                            <p className="scchs-note">
                                NOTE: If you are already a member you should{" "}
                                <a href="/signin" className="scchs-sign-in-link">
                                    SIGN IN
                                </a>{" "}
                                and do an Online Renew instead of an Online Join.
                            </p>
                            <p className="scchs-business-note">
                                If you are purchasing a <strong>Business Membership</strong>, please
                                enter the name of your company when asked to do so. Otherwise, please
                                enter N/A as a company name.
                            </p>
                            <Link href="/join/register2"><button className="scchs-next-btn">Next</button></Link>
                        </div>

                        {/* Section: Membership Plan */}
                        <div className="scchs-membership-plan">
                            <h3 className="scchs-plan-title">Membership Plan</h3>
                            <select className="scchs-plan-dropdown">
                                <option>Select Membership Plan</option>
                                <option>Individual Membership</option>
                                <option>Business Membership</option>
                            </select>
                        </div>
                    </div>

                    <div className="table-container">
                        <h2 className="table-title">Membership Plans Offered</h2>
                        {/* <table className="membership-table">
                            <thead>
                                <tr>
                                    <th>Plan Name</th>
                                    <th>For</th>
                                    <th>Maximum Associated Members</th>
                                    <th>Annual Fee</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map((plan, index) => (
                                    <tr key={index}>
                                        <td>{plan.name}</td>
                                        <td>Person(s)</td>
                                        <td>{plan.members}</td>
                                        <td>{plan.fee}</td>
                                        <td>See JOIN US &gt; Member Benefits section.</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> */}

                        <div className="scch-table-container scch_sety">
                            <table className="scch-member-table">
                                <colgroup>
                                    {/* <col style={{ width: "25%" }} />
                                <col style={{ width: "30%" }} />
                                <col style={{ width: "45%" }} /> */}
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="nh1">Plan Name</th>
                                        <th className="nh1">For</th>
                                        <th>Maximum Associated Members</th>
                                        <th>Annual Fee</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plans.map((item, idx) => (
                                        <tr key={idx}>
                                            <td>{item.name}</td>
                                            <td>{item.for}</td>
                                            <td>
                                                {item?.members}
                                            </td>
                                            <td>
                                                {item?.fee}
                                            </td>
                                            <td>
                                                {item?.description}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>



                        </div>
                        <Link style={{ textDecoration: "none" }} href="/join/register2"><button className="scchs_hj_btn">Next</button></Link>
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