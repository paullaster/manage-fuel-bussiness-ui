import SectionIntroduction from './SectionIntroduction';
import VendorActionListComponent from './PurchasesActionListComponent';

const PurcahsesItemsTopBar = ({caption}) => {
    return (
        <div className="vendorActions">
            <SectionIntroduction text={` ${caption || 'something here'}`} />
            <VendorActionListComponent />
        </div>
    )
}

export default PurcahsesItemsTopBar