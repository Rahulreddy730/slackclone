import React, { useEffect, useState } from "react"
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Siderbar() {

    const [channels, setChannels] = useState ([]);
    const [{ user }] = useStateValue();


    useEffect(() => {
        //Run this code ONCE when the siderbar component load
        db.collection("rooms").onSnapshot(snapshort => (
            setChannels(
                snapshort.docs.map(doc =>
                    ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        ))
            
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Rahul Programmer</h2>
                     <h3>
                         <FiberManualRecordIcon />
                         {user?.displayName}
                    </h3>
                 </div>
                 <CreateIcon />
                 
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user group" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File broswer" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />


            {/* Connect to dB and list all the channels*/}
            {/* <SidebarOption.../>*/}
            
            <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption/>

           
            {channels.map(channel => 
            (
            <SidebarOption 
                title={channel.name} 
                id={channel.id}/>
            ))}

        </div>
    )
}

export default Siderbar;