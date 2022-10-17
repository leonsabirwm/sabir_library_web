import React from 'react'
import Feature from './Feature'
import { MdLibraryAdd } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { BsArrowUpRightCircleFill,BsFillArrowDownLeftCircleFill } from "react-icons/bs";

const Features = () => {
    const addIcon = <MdLibraryAdd></MdLibraryAdd>
    const lendIcon = <BsArrowUpRightCircleFill></BsArrowUpRightCircleFill>
    const returnIcon = <BsFillArrowDownLeftCircleFill></BsFillArrowDownLeftCircleFill>
    const borrowBook = <ImBooks></ImBooks>
    const returnBorrowingIcon = <GiReturnArrow></GiReturnArrow>
    const displayIcon = <GoChecklist></GoChecklist>



    const features = [{feature:"Add a Book",redirect:"addbook",bg:"bg-green-400",icon:addIcon},{feature:"Lend a Book",redirect:"lendbook",bg:"bg-yellow-400",icon:lendIcon},{feature:'Enlist a Return',redirect:'returnbook',bg:"bg-sky-400",icon:returnIcon},{feature:'Borrow a Book',redirect:"borrowbook",bg:"bg-emerald-500",icon:borrowBook},{feature:'Return a Borrowing',redirect:"returnborrowing",bg:"bg-teal-400",icon:returnBorrowingIcon},{feature:'Display Book List',redirect:"borrowbook",bg:"bg-fuchsia-400",icon:displayIcon}]
  return (
    <div className='flex items-center justify-center mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-6'>
            {
                features.map((feature,index)=><Feature key={index} bg={feature.bg} feature={feature.feature} redirect={feature.redirect} icon={feature.icon}></Feature>)
            }
        </div>
    </div>
  )
}

export default Features