const AddUserButton = ({ addUser }) => {
    return (
      <>
     
      <button
        onClick={addUser}
        className="mt-2 px-4 py-1 text-white rounded-lg transition-all hover:text-gray-500 text-4xl"
      >
       +
      </button>
      
      </>
    );
  };
  
  export default AddUserButton;
  