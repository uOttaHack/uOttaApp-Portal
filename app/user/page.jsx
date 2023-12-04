import { auth, currentUser } from '@clerk/nextjs';

const User = async () => {
  const { userId } = auth();

  const user = await currentUser();

  // Real-time user data
  const users = [
    {
      id: 1,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      role: 'User', // You can update this based on your application's logic
      image: user.imageUrl,
    },
    // Add more users as needed
  ];

  // You can add more user data as needed from the "user" object.

  return (
    <div className='min-h-screen mt-20 flex flex-col justify-between'>
      <div className='container mx-auto px-4 py-8'>
        {/* User Image */}
        <div className='w-32 h-32 mx-auto rounded-full overflow-hidden'>
          <img
            className='object-cover object-center w-full h-full'
            src={users[0].image}
            alt='User'
          />
        </div>

        {/* User Details */}
        <div className='my-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>{users[0].name}</h2>
          <p className='text-xl text-gray-600'>{users[0].email}</p>
        </div>

        {/* User Table */}

      </div>
    </div>
  );
};

export default User;