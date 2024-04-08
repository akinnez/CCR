'use client';
import {useState} from 'react';
import SidebarComponent from '@/components/reusable/sidebar.component';
import NavbarComponent from '@/components/reusable/navbar.component';
import getValueName from '@/hooks/useName';

function GeneralComponent({getchildren}: {getchildren: any}) {
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
					<div className="px-3 lg:px-10">{getchildren}</div>
				</div>
			</div>
		</>
	);
}

export default GeneralComponent;
