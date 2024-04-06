import {useParams} from 'next/navigation';

function getValueName(): string {
	return useParams()?.id as string;
}

export default getValueName;
