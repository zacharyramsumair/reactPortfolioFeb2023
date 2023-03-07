import NavLinks from "./NavLinks";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

export default function MobileNavigation() {
	let [open, setOpen] = useState(false);

	let hamburgerIcon = (
		<CgMenuRound className="navHamburger" onClick={() => setOpen(!open)} />
	);

	let closeIcon = (
		<CgCloseO className="navHamburger" onClick={() => setOpen(!open)} />
	);

    let closeMobileMenu = () => setOpen(false)

	return (
		<>
			{open ? closeIcon : hamburgerIcon}
			<ul className="mobileNavigation">{open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}</ul>
		</>
	);
}
