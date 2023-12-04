import { UserProfile } from '@clerk/nextjs';

const Profile = () => {
  // Replace '#HEXCODE' with the actual hex code of the color you want to use
  const descriptionColor = '#8D8E99';

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='my-16 text-left'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center lg:text-left'>
          💃 My Profile
        </h1>
        {/* Apply the color to the description */}
        <p className='mb-8' style={{ color: descriptionColor }}>View user details</p>
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
