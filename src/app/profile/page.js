import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
 import { redirect } from 'next/navigation'
 
const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect('api/auth/login')
    return
    
  }

  return (
    <div className="flex items-center justify-center translate-y-1/2">
      <div className="py-10 p-6 font-serif border max-w-xl rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome to your profile!</h1>
      </div>
    </div>
  );
};

export default Profile;
