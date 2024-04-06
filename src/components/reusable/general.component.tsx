'use client';
import {useState} from 'react';
import SidebarComponent from '@/components/reusable/sidebar.component';
import NavbarComponent from '@/components/reusable/navbar.component';
import getValueName from '@/utils/getUsername.util';

function GeneralComponent({children}: {children: any}) {
	const [isclose, setClose] = useState(false);
	function close() {
		setClose(!isclose);
	}
	return (
		<>
			<div className="flex">
				<SidebarComponent
					close={close}
					isclose={isclose}
					user={getValueName()}
				/>

				<div className="w-full">
					<NavbarComponent
						close={close}
						isclose={isclose}
						profileName={getValueName()}
					/>
					<div className="px-3 lg:px-10">{children}</div>
				</div>
			</div>
		</>
	);
}

export default GeneralComponent;
