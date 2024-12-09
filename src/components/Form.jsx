import React from 'react';

const Form = () => {
  return (
    <div className=' grid grid-cols-5 gap-10 pt-10'>
      <div className=' flex flex-col col-span-2'>
        <h1>Login</h1>
        <span className=' bg-red-100 text-red-700 p-3 rounded-md'>
          Your session has timed out. Please log in again.
        </span>

        <div className=' flex flex-col gap-6'>
          <input type='text' className=' border border-gray-300 p-3' />
          <input type='text' className=' border border-gray-300 p-3' />
        </div>
      </div>
      <div className=' col-span-3 flex flex-col gap-6'>
        <h1>is this your first time here</h1>
        <p>
          For full access to this site, you first need to create an account.
        </p>
        <button className=' bg-gray-600 text-white p-1 rounded-md'>
          Create new account
        </button>
      </div>
    </div>
  );
};

export default Form;
