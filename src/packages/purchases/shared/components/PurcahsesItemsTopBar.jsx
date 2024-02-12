import SectionIntroduction from './SectionIntroduction';
import PurchasesActionListComponent from '@/components/shared/PurchasesActionListComponent';

const PurcahsesItemsTopBar = ({caption, listOfActions}) => {
    return (
        <div className="vendorActions">
            <SectionIntroduction text={` ${caption || 'something here'}`} />
            <PurchasesActionListComponent list={listOfActions || []} />
        </div>
    )
}

export default PurcahsesItemsTopBar