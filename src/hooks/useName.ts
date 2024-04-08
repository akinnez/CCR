import {useParams} from 'next/navigation';

function useName(): string {
	return useParams()?.id as string;
}

export default useName;
