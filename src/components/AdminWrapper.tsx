import { Avatar, Popover } from "antd"
import { useState } from "react"
import { AiOutlineBank, AiOutlineRead } from "react-icons/ai"
import { BiCertification, BiMoneyWithdraw } from "react-icons/bi"
import { CiGlobe, CiPaperplane } from "react-icons/ci"
import { FaRegUserCircle, FaUser } from "react-icons/fa"
import { FiPackage, FiUsers } from "react-icons/fi"
import { IoMdArrowDropdown } from "react-icons/io"
import { IoHomeOutline, IoShareSocialOutline } from "react-icons/io5"
import { LuLogOut, LuSchool, LuWebcam } from "react-icons/lu"
import { MdKeyboardDoubleArrowRight, MdOutlineLocalPhone, MdOutlineVerified, MdOutlineWebhook } from "react-icons/md"
import { PiCertificate, PiCertificateBold, PiHandWithdraw, PiTrafficSignal } from "react-icons/pi"
import { RiSecurePaymentLine } from "react-icons/ri"
import { TbCertificate, TbTools, TbTrafficCone, TbTrafficLights, TbUsersPlus } from "react-icons/tb"
import { Link, Outlet } from "react-router"
// import logo from '../assets/icons/logo.svg'

const links = [
    {
        name: 'Dashboard',
        links: '/admin/dashboard',
        icon: <IoHomeOutline size={25} />
    },
    {
        name: 'Plan Management',
        children: [
            {
                name: 'Plans',
                links: '/admin/plans',
                icon: <CiPaperplane size={25} />
            },
            {
                name: 'Courses',
                links: '/admin/courses',
                icon: <AiOutlineRead size={25} />
            },
        ],
        icon: <FiPackage size={25} />
    },
    {
        name: 'Site Management',
        children: [
            {
                name: 'Social Medias',
                links: '/admin/social-medias',
                icon: <IoShareSocialOutline size={25} />
            },
            {
                name: 'About Us',
                links: '/admin/about-us',
                icon: <FiUsers size={25} />
            },
            {
                name: 'Contact Us',
                links: '/admin/contact-us',
                icon: <MdOutlineLocalPhone size={25} />
            },
        ],
        icon: <CiGlobe size={25} />
    },
    {
        name: 'Webinar Management',
        children: [
            {
                name: 'Webinar',
                links: '/admin/webinar',
                icon: <MdOutlineWebhook size={25} />
            },
            {
                name: 'Enrollments',
                links: '/admin/enrollments',
                icon: <LuSchool size={25} />
            },
            {
                name: 'Trainings',
                links: '/admin/trainings',
                icon: <TbTools size={25} />
            },
        ],
        icon: <LuWebcam size={25} />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Users',
                links: '/admin/users',
                icon: <TbUsersPlus size={25} />
            },
            {
                name: 'KYC',
                links: '/admin/kyc',
                icon: <MdOutlineVerified size={25} />
            },
            {
                name: 'Bank Details',
                links: '/admin/bank-details',
                icon: <AiOutlineBank size={25} />
            },
        ],
        icon: <FaRegUserCircle size={25} />
    },
    {
        name: 'Payment Management',
        children: [
            {
                name: 'Withdrawal Requests',
                links: '/admin/withdrawal-requests',
                icon: <PiHandWithdraw size={25} />
            },
            {
                name: 'Payment History',
                links: '/admin/payment-history',
                icon: <BiMoneyWithdraw size={25} />
            },
        ],
        icon: <RiSecurePaymentLine size={25} />
    },
    {
        name: 'Affilates Management',
        children: [
            {
                name: 'Affilates',
                links: '/admin/affilates',
                icon: <TbTrafficCone size={25} />
            },
            {
                name: 'Traffics',
                links: '/admin/traffics',
                icon: <TbTrafficLights size={25} />
            },
        ],
        icon: <PiTrafficSignal size={25} />
    },
    {
        name: 'Certificates Management',
        children: [
            {
                name: 'Plan Completion',
                links: '/admin/plan-completion',
                icon: <BiCertification size={25} />
            },
            {
                name: 'Webnier Completion',
                links: '/admin/webinar-completion',
                icon: <TbCertificate size={25} />
            },
            {
                name: 'Training Completion',
                links: '/admin/training-completion',
                icon: <PiCertificate size={25} />
            },
        ],
        icon: <PiCertificateBold size={25} />
    },
]

const AdminWrapper
    = () => {
        const [expand, setExpand] = useState(false)
        const [open, setOpen] = useState('')

        return (
            <div className="flex flex-col h-screen overflow-hidden">
                <div className="w-full px-5 py-3 sticky top-0 !bg-white z-100 border-b shadow flex  pr-10 h-[70px] justify-between items-center gap-10">
                    <img src={'https://spellhosting.com/assets/img/logo.png'} alt="logo" className="w-[170px]" />
                    <Popover placement="bottomRight" content={<div className="space-y-2 p-2 py-1 pr-10">
                        <h6 className="flex items-center text-base font-semibold gap-2">
                            <FaUser />
                            Profile
                        </h6>
                        <h6 className="flex text-base font-semibold items-center gap-2">
                            <LuLogOut />
                            Logout
                        </h6>
                    </div>}>
                        <Avatar icon={<FaUser size={25} />} className="!bg-spell-purple cursor-pointer" size={'large'} />
                    </Popover>
                </div>
                <div className="flex h-[calc(100%-70px)] w-full relative">
                    <div className={`${expand ? 'w-[260px]' : 'w-[70px]'} pt-10 flex flex-col border-r shadow-sm bg-spell-purple/75 text-white gap-2 overflow-y-auto h-full`}>
                        {links?.map((item, i) => item?.children ?
                            <>
                                <div key={i} onClick={() => open === item.name ? setOpen('') : setOpen(item.name)} className={`flex items-center cursor-pointer gap-2 ${expand ? 'px-3' : 'justify-center'} py-2`}>
                                    {item?.icon}
                                    {expand && <h6 className="text-sm font-medium"> {item?.name}</h6>}
                                    <IoMdArrowDropdown size={20} />
                                </div>

                                {open === item.name && item?.children?.map((child, j) => <Link to={child?.links} key={j} className={`flex items-center  gap-2 ${expand ? 'px-8' : 'justify-center'} p-2`}>
                                    {child?.icon}
                                    {expand && <h6 className="text-sm font-medium"> {child?.name}</h6>}
                                </Link>)}
                            </>
                            : <Link onClick={() => setOpen('')} to={item?.links} key={i} className={`flex items-center  gap-2 ${expand ? 'px-3' : 'justify-center'} py-2`}>
                                {item?.icon}
                                {expand && <h6 className="text-sm font-medium"> {item?.name}</h6>}
                            </Link>)}

                    </div>
                    <div className="overflow-auto relative h-full w-full flex-1">
                        <span className="left-0 top-0 z-100 sticky"><MdKeyboardDoubleArrowRight size={25} className={`cursor-pointer bg-white border border-spell-purple shadow ${expand ? 'rotate-180' : ''}`} onClick={() => setExpand(!expand)} /></span>
                        <div className="p-5  lg:pl-7 pt-6 -mt-6 lg:pr-10">
                            <Outlet />
                        </div>

                    </div>
                </div>
            </div>
        )
    }

export default AdminWrapper


