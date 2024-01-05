import React from 'react'

const AddVendor = () => {
  return (
      <div className="">
          <label htmlFor="vendor" className="label-required">Vendor</label>
          <div className="add_item_placeholder">
              <span>
                  <MdPersonAdd size={20} />
              </span>
              <span>
                  Add a vendor
              </span>
          </div>
          <div className="add_new_item_card">
              <div className="add_new_item_card__search">
                  <span><MdOutlineSearch size={20} /></span>
                  <input type="search" name="vendor" id="vendor" />
              </div>
              <div>
              </div>
              <Button>
                  <span><MdAdd size={20} /></span>
                  <span>new vendor</span>
              </Button>
          </div>
      </div>
  )
}

export default AddVendor