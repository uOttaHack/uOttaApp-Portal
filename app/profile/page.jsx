import { UserProfile } from '@clerk/nextjs';

const Profile = () => {
  // Replace '#HEXCODE' with the actual hex code of the color you want to use
  const descriptionColor = '#8D8E99';

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='my-16 w-3/4 text-left'>
        <h1 className='text-2xl mb-4'>User Profile</h1>
        {/* Apply the color to the description */}
        <p className='mb-8' style={{ color: descriptionColor }}>View user details</p>
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
