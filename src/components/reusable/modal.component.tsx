import {Dialog} from '@/components/ui/dialog';

function ModalComponent({
	isOpen,
	children,
	...props
}: {
	isOpen: boolean;
	children: any;
}) {
	return (
		<>
			<Dialog open={isOpen} {...props}>
				{children}
			</Dialog>
		</>
	);
}

export default ModalComponent;
