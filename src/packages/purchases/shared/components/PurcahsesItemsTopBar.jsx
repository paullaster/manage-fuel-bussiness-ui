import SectionIntroduction from './SectionIntroduction';
import {ActionListComponent} from '@/components';

const PurcahsesItemsTopBar = ({caption, listOfActions}) => {
    return (
        <div className="vendorActions">
            <SectionIntroduction text={` ${caption || 'something here'}`} />
            <PurchasesActionListComponent list={listOfActions || []} />
        </div>
    )
}

export default PurcahsesItemsTopBar