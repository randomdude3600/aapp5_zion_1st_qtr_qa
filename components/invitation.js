// import Image from "next/image";

import invitation_styles from "../styles/Invitation.module.css";

export default function Invitation() {
    return (
        <>
            <div className={invitation_styles.invitation_container}>
                <div className={invitation_styles.invitation}>
                    <img className={invitation_styles.power} src={'img/misc/power.jpg'}/>
                    <section>
                        <h1>Your invited to this awesome birthday party!</h1>
                        <h2>PS <pre>bring (h/br)os</pre> </h2>
                    </section>
                    {/* <h2>10/26/22 02:00PM - 07:00PM</h2> */}
                </div>
            </div>
        </>
    )
}