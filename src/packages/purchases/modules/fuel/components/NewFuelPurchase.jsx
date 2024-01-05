import { useState } from "react";
import { MdOutlineSearch, MdAdd, MdPersonAdd } from "react-icons/md";
import { Button, InputComponent } from "@/components";
import shared from "../../../shared";
import Transport from "./Transport";

const NewFuelPurchase = () => {

  const [tankData, setTankData] = useState([]);
  const [taxData, setTaxData] = useState([]);

  const handleAddNewTankentry = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.type === 'click') {
      const options = [
        {
          prop: 'dip_quantity_before_offloading',
          type: 'number',
          placeholder: " dip quantity before offloading",
        },
        {
          prop: 'sales_quantity_during_offloading',
          type: 'number',
          placeholder: "sales quantity during offloading",
        },
        {
          prop: 'expected_quantity',
          type: 'number',
          placeholder: "expected quantity",
        },
        {
          prop: 'actual_dip_quantity_after_offloading',
          type: 'number',
          placeholder: "actual dip quantity after offloading",
        },
      ];
      setTankData(prev => prev = [...prev, <shared.components.NewConstruct options={options} />]);
    }
  }

  const handleAddNewTaxData = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.type === 'click') {
      const options = [
        {
          prop: 'quantity',
          type: 'number',
          placeholder: " quantity",
        },
        {
          prop: 'price',
          type: 'number',
          placeholder: "price",
        },
        {
          prop: 'gross_amount',
          type: 'number',
          placeholder: "gross amount",
        },
        {
          prop: 'tax_rate',
          type: 'number',
          placeholder: "tax rate",
        },
        {
          prop: 'tax_amount',
          type: 'number',
          placeholder: "tax amount",
        },
        {
          prop: 'net_payable',
          type: 'number',
          placeholder: "net payable",
        },
      ];
      
      const styleProp = {
          display: "grid",
          gridTemplateColumns: "16% 16% 16% 16% 16% 12%",
          columnGap: "1.2rem",
          padding: '2.0rem 0',
          borderBottom: ".1rem solid #5f6c921e",
      }
      setTaxData(prev => prev = [...prev, <shared.components.NewConstruct options={options} style={styleProp} />]);
    }
  }

  return (
    <section className="newfuelpurchase">
      <shared.components.SectionIntroduction text="New Fuel Purchase" />
      <div className="newfuelpurchase_autofil">
        <shared.components.AddVendor />
        <div>
          <label htmlFor="invoice">product</label>
          <div>
            <span><MdOutlineSearch size={20} /></span>
            <input type="search" name="invoice" id="invoice" />
          </div>
          <div>
            <Button>
              <span><MdAdd size={20} /></span>
              <span>new product</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="newfuelpurchase_tankentries">
        <div className="newfuelpurchase_tankentries__headers">
          <div ><span>Dip Qnty Before offloading</span></div>
          <div><span>sales Qnty</span></div>
          <div><span>expected Qnty</span></div>
          <div ><span>Actual dip Qnty after offloading</span></div>
        </div>
        <div className="newfuelpurchase_tankentries__items">
          {
            tankData.length > 0 && tankData.map(t => t)
          }
          <shared.components.AddItemButton methodHandler={handleAddNewTankentry} btnCaption="add tank entry"/>
        </div>
      </div>
      <Transport />
      <div className="newfuelpurchase_taxdata">
        <div className="newfuelpurchase_taxdata__headers">
          <div><span>quantity</span></div>
          <div><span>price</span></div>
          <div><span>gross amount</span></div>
          <div><span>tax rate</span></div>
          <div><span>tax amount</span></div>
          <div><span>net payable</span></div>
        </div>
        <div className="newfuelpurchase_taxdata__item">
          {
            taxData.length > 0 && taxData.map(nt => nt)
          }
          <shared.components.AddItemButton methodHandler={handleAddNewTaxData} btnCaption="add tax"/>
        </div>
        <div>
          <label htmlFor="invoice">Invoice</label>
          <div>
            <span><MdOutlineSearch size={20} /></span>
            <input type="search" name="invoice" id="invoice" />
          </div>
          <div>
            <Button>
              <span><MdAdd size={20} /></span>
              <span>new invoice</span>
            </Button>
          </div>
        </div>
        <div>
          <label htmlFor="invoice">officer</label>
          <div>
            <span><MdOutlineSearch size={20} /></span>
            <input type="search" name="invoice" id="invoice" />
          </div>
          <div>
            <Button>
              <span><MdAdd size={20} /></span>
              <span>new officer</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewFuelPurchase