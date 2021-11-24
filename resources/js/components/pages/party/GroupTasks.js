import React from "react";
import GroupMemberPublicTasks from "../tasks/GroupMemberPublicTasks";
import Header from "../../layouts/Header";

import { useState } from 'react';

function GroupTasks(){

    return(
        <div>
            <Header page="group_tasks"/>
            <section className="d-flex justify-content-center align-items-center">
                <h1>test why not</h1>
                <GroupMemberPublicTasks/>
            </section>
        </div>
    )
}

export default GroupTasks;
