import React from "react";

function TeamList(props) {
    return(
        <div>
            {props.team.map((member) => {
                return(
                    <div className="memberCard" key={ member.id }>
                        <h2>{ member.name }</h2>
                        <p>{ member.email }</p>
                        <p>{ member.role }</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamList;