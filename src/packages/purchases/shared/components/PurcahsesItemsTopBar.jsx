import SectionIntroduction from '../../../../components/shared/SectionIntroduction';
import { ActionListComponent } from '@/components';

const PurcahsesItemsTopBar = ({ caption, listOfActions }) => {
    return (
        <div className="vendorActions">
            <SectionIntroduction text={` ${caption || 'something here'}`} />
            <ActionListComponent list={listOfActions || []} />
        </div>
    )
}

export default PurcahsesItemsTopBar