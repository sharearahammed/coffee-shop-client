import Swal from 'sweetalert2'
import Header from './Header';

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity,supplier,taste,catagory,details,photo}

        console.log(newCoffee)

        fetch('https://coffe-store-server-ruddy.vercel.app/coffee',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


  return (
    <div>
        <Header></Header>
        <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-center text-3xl font-extrabold mb-8">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* Form name and quantity row */}
        <div className="md:flex gap-4 mb-8">
        <div className="md:w-1/2">
            <label className="label">
                <span>Coffee Name</span>
            </label>
        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
        </div>

        <div className="md:w-1/2">
            <label className="label">
                <span>Available Quantity</span>
            </label>
        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
        </div>
        </div>
        {/* Form supplier and taste row */}
        <div className="md:flex gap-4 mb-8">
        <div className="md:w-1/2">
            <label className="label">
                <span>Supplier Name</span>
            </label>
        <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
        </div>

        <div className="md:w-1/2">
            <label className="label">
                <span>Taste</span>
            </label>
        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
        </div>
        </div>

        {/* Form catagory and details row */}
        <div className="md:flex gap-4 mb-8">
        <div className="md:w-1/2">
            <label className="label">
                <span>Catagory Name</span>
            </label>
        <input type="text" name="catagory" placeholder="Catagory" className="input input-bordered w-full" />
        </div>

        <div className="md:w-1/2">
            <label className="label">
                <span>Details</span>
            </label>
        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
        </div>
        </div>

        {/* Form Photo url row */}
        <div className="mb-8">
        <div className="w-full">
            <label className="label">
                <span>Photo URL</span>
            </label>
        <input type="text" name="photo" placeholder="Catagory" className="input input-bordered w-full" />
        </div>

        </div>
        <input type="submit" value="Add Coffee" className="bg-[#D2B48C] btn btn-block" />
        
      </form>
    </div>
    </div>
  );
};

export default AddCoffee;
