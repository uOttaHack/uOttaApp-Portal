import { auth, currentUser } from '@clerk/nextjs';
import FormComponent from '../../components/ApplicationForm';

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

  const descriptionColor = '#8D8E99';
  // You can add more user data as needed from the "user" object.

  return (
    <div className='mt-20'>
      <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center lg:text-left'>
        📝 My Application
      </h1>
      <p className='mb-8' style={{ color: descriptionColor }}>Almost there! Please complete and submit your application to be considered for uOttaHack 6!</p>
      <FormComponent userEmail={user.emailAddresses[0].emailAddress} />
    </div>
  );
};

export default User;


{/* <div className='container mx-auto px-4 py-8'>

          <div className='w-32 h-32 mx-auto rounded-full overflow-hidden'>
            <img
              className='object-cover object-center w-full h-full'
              src={users[0].image}
              alt='User'
            />
          </div>


          <div className='my-8 text-center'>
            <h2 className='text-3xl font-bold text-gray-800'>{users[0].name}</h2>
            <p className='text-xl text-gray-600'>{users[0].email}</p>
          </div>

        </div> */}