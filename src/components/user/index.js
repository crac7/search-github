
import React from 'react';
const User = ({ name, img, url }) => {
    const openProfile = () => window.open(url);
    return (
      <div className='container-fluid d-flex border-top mt-2 pt-2'>
        <div className='d-flex border border-2 rounded-circle overflow-hidden align-items-center justify-content-center'>
          <img width={'128px'} height='128px' src={img} />
        </div>
        <div className='d-flex' style={{ width: '90%', marginLeft: '10px' }}>
          <div className='w-100'> {name}</div>
          <div className='d-flex align-items-center justify-content-center'>
            <button type="button" className="btn btn-outline-primary" onClick={openProfile}>View</button>
          </div>
        </div>
      </div>
    );
  }


  export default User;